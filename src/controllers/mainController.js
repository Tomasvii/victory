const path = require("path");
const db = require("../database/models");
const config = require("dotenv");
config.config();

const Stripe = require("stripe");

const SK = process.env.STRIPE_SKL;
const SWH = process.env.STRIPE_WH;

const stripe = new Stripe(SK);

module.exports = {
    home: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("home", {
            games: games,
        });
    },
    check: async (req, res) => {
        const game = await db.Games.findAll({
            where: {
                nombre: req.body.game,
            },
        });
        const server = await db.Servers.findAll({
            where: {
                juego_id: game[0].juego_id,
            },
        });
        const session = await stripe.checkout.sessions.create({
            invoice_creation: {
                enabled: true,
            },
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: req.body.game,
                            description:
                                req.body.quantity +
                                " " +
                                req.body.server +
                                " " +
                                req.body.faction +
                                " " +
                                req.body.char +
                                " " +
                                req.body.delivery,
                            images: [game[0].logo],
                        },
                        currency: "USD",
                        unit_amount: Math.ceil(server[0].price * 1.03 * 100),
                    },
                    quantity: req.body.quantity,
                },
            ],
            metadata: {
                description:
                    req.body.game +
                    "-" +
                    req.body.quantity +
                    "-" +
                    req.body.server +
                    "-" +
                    req.body.faction +
                    "-" +
                    req.body.char +
                    "-" +
                    req.body.delivery,
            },
            mode: "payment",
            success_url:
                "https://www.victorygold.net/success/{CHECKOUT_SESSION_ID}",
            cancel_url: "https://www.victorygold.net",
        });
        return res.json(session);
    },
    checkStore: async (req, res) => {
        const game = await db.Products.findAll({
            where: {
                nombre: req.body.game,
            },
        });
        const session = await stripe.checkout.sessions.create({
            invoice_creation: {
                enabled: true,
            },
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: req.body.game + " x" + req.body.quantity,
                            images: [game[0].image],
                        },
                        currency: "USD",
                        unit_amount: Math.ceil(server[0].price * 100),
                    },
                    quantity: req.body.quantity,
                },
            ],
            metadata: {
                description: req.body.game + "-" + req.body.quantity,
            },
            mode: "payment",
            success_url:
                "https://www.victorygold.net/success-store/{CHECKOUT_SESSION_ID}",
            cancel_url: "https://www.victorygold.net",
        });
        return res.json(session);
    },
    webhook: async (req, res) => {
        const sig = req.headers["stripe-signature"];
        const payload = req.rawBody;

        try {
            const event = stripe.webhooks.constructEvent(payload, sig, SWH);

            if (event.type === "checkout.session.completed") {
                const checkoutSessionCompleted = event.data.object;

                await db.Stripes.create({
                    url_id: checkoutSessionCompleted.id,
                    transaction_id: event.id,
                    email: checkoutSessionCompleted.customer_details.email,
                    amount: checkoutSessionCompleted.amount_total / 100,
                    payment_intent: event.data.object.payment_intent,
                    details: checkoutSessionCompleted.metadata.description,
                });
                await db.Orders.create({
                    url_id: checkoutSessionCompleted.id,
                    transaction_id: event.id,
                    email: checkoutSessionCompleted.customer_details.email,
                    amount: checkoutSessionCompleted.amount_total / 100,
                    payment_intent: event.data.object.payment_intent,
                    details: checkoutSessionCompleted.metadata.description,
                });
            } else {
                console.log(`Evento no manejado: ${event.type}`);
            }

            res.json({ received: true });
        } catch (err) {
            console.error(
                "Error al manejar el webhook de Stripe:",
                err.message
            );
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    },
    success: async (req, res) => {
        const transactionId = req.params.transactionId;
        const transaction = await db.Stripes.findAll({
            where: {
                url_id: transactionId,
            },
        });

        /*
        // Los últimos dígitos de la tarjeta:

        const paymentIntent = await stripe.paymentIntents.retrieve(
            transaction[0].payment_intent
        );

        
        const latestChargeId = paymentIntent.latest_charge;

        const charge = await stripe.charges.retrieve(latestChargeId);

        console.log(
            "Últimos 4 dígitos de la tarjeta:",
            charge.payment_method_details.card.last4
        );
        console.log(
            "Marca de la tarjeta:",
            charge.payment_method_details.card.brand
        );
        */

        const details = transaction[0].details.split("-");

        return res.render("success", {
            transaction: transaction[0],
            details: details,
        });
    },
    successStore: async (req, res) => {
        const transactionId = req.params.transactionId;
        const transaction = await db.Stripes.findAll({
            where: {
                url_id: transactionId,
            },
        });

        const details = transaction[0].details.split("-");

        return res.render("success-store", {
            transaction: transaction[0],
            details: details,
        });
    },
    admin_log: async (req, res) => {
        return res.render("admin-log");
    },
    admin: async (req, res) => {
        /*const pag = req.query.page || 1;
        const limit = req.query.pageSize || 20;*/
        const games = await db.Games.findAll();
        const currencies = await db.Currencies.findAll();
        const products = await db.Products.findAll();

        const orders = await db.Orders.findAll({
            order: [
                ["delivered", "ASC"],
                ["created_at", "ASC"],
            ],
            /*limit: limit,
            offset: (pag - 1) * limit,*/
        });

        return res.render("admin", {
            orders,
            games: games,
            currencies: currencies,
            products: products,
            /*pag,
            limit,*/
        });
    },
    updateOrder: async (req, res) => {
        const ADMIN = process.env.ADMIN;
        try {
            const orderId = req.body.orderId;
            const delivered = req.body.delivered === "on";
            const proof = req.body.proof;

            await db.Orders.update(
                { delivered: delivered, proof: proof },
                { where: { id: orderId } }
            );

            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al actualizar la orden:", error);
            return res.status(500).send("Error interno del servidor");
        }
    },
    processPrices: async (req, res) => {
        try {
            const ADMIN = process.env.ADMIN;
            const rawData = req.body.rawData;

            const game = req.body.game;

            const lines = rawData.split("\n").map((line) => line.trim());

            const prices = lines.slice(1).map((price) => Number(price.trim()));
            const validPrices = prices.filter((price) => !isNaN(price));

            console.log("Precios procesados:", validPrices);

            await updateDatabaseFromPrices(game, validPrices);
            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al procesar los precios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    processPrices_sell: async (req, res) => {
        try {
            const ADMIN = process.env.ADMIN;
            const rawData = req.body.rawData;

            const game = req.body.game;

            const lines = rawData.split("\n").map((line) => line.trim());

            const prices = lines.slice(1).map((price) => Number(price.trim()));
            const validPrices = prices.filter((price) => !isNaN(price));

            console.log("Precios procesados:", validPrices);

            await updateDatabaseFromPrices_sell(game, validPrices);
            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al procesar los precios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    processPrices_currencies: async (req, res) => {
        try {
            const ADMIN = process.env.ADMIN;
            const rawData = req.body.rawData;

            const game = req.body.game;

            const lines = rawData.split("\n").map((line) => line.trim());

            const prices = lines.slice(1).map((price) => Number(price.trim()));
            const validPrices = prices.filter((price) => !isNaN(price));

            console.log("Precios procesados:", validPrices);

            await updateCurrencies(game, validPrices);
            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al procesar los precios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    processPrices_currencies_sell: async (req, res) => {
        try {
            const ADMIN = process.env.ADMIN;
            const rawData = req.body.rawData;

            const game = req.body.game;

            const lines = rawData.split("\n").map((line) => line.trim());

            const prices = lines.slice(1).map((price) => Number(price.trim()));
            const validPrices = prices.filter((price) => !isNaN(price));

            console.log("Precios procesados:", game, validPrices);

            await updateCurrencies_sell(game, validPrices);
            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al procesar los precios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    processPrices_store: async (req, res) => {
        try {
            const ADMIN = process.env.ADMIN;
            const rawData = req.body.rawData;

            const game = req.body.game;

            const lines = rawData.split("\n").map((line) => line.trim());

            const prices = lines.slice(1).map((price) => Number(price.trim()));
            const validPrices = prices.filter((price) => !isNaN(price));

            console.log("Precios procesados:", game, validPrices);

            await updateStore(game, validPrices);
            return res.redirect(`/${ADMIN}`);
        } catch (error) {
            console.error("Error al procesar los precios:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
    privacy: (req, res) => {
        return res.render("privacy");
    },
    copyright: (req, res) => {
        return res.render("copyright");
    },
    aboutUs: (req, res) => {
        return res.render("aboutUs");
    },
    terms: (req, res) => {
        return res.render("terms");
    },
    contact: (req, res) => {
        return res.render("contact");
    },
};

async function updateDatabaseFromPrices(game, prices) {
    try {
        if (prices.length === 0) {
            throw new Error("No se proporcionaron precios para actualizar");
        }

        let serversToUpdate;

        if (game == "all") {
            serversToUpdate = await db.Servers.findAll();
        } else {
            serversToUpdate = await db.Servers.findAll({
                where: { juego_id: game },
            });
        }

        for (let index = 0; index < prices.length; index++) {
            const price = prices[index];

            await serversToUpdate[index].update({ price: price });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function updateDatabaseFromPrices_sell(game, prices) {
    try {
        if (prices.length === 0) {
            throw new Error("No se proporcionaron precios para actualizar");
        }

        let serversToUpdate;

        if (game == "all") {
            serversToUpdate = await db.Servers_sell.findAll();
        } else {
            serversToUpdate = await db.Servers_sell.findAll({
                where: { juego_id: game },
            });
        }

        for (let index = 0; index < prices.length; index++) {
            const price = prices[index];

            await serversToUpdate[index].update({ price: price });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function updateCurrencies(game, prices) {
    try {
        if (prices.length === 0) {
            throw new Error("No se proporcionaron precios para actualizar");
        }

        let serversToUpdate;

        if (game == "all") {
            serversToUpdate = await db.Currencies.findAll();
        } else {
            serversToUpdate = await db.Currencies.findAll({
                where: { moneda: game },
            });
        }

        for (let index = 0; index < prices.length; index++) {
            const price = prices[index];

            await serversToUpdate[index].update({ precio: price });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function updateCurrencies_sell(game, prices) {
    try {
        if (prices.length === 0) {
            throw new Error("No se proporcionaron precios para actualizar");
        }

        let serversToUpdate;

        if (game == "all") {
            serversToUpdate = await db.Currencies_sell.findAll();
        } else {
            serversToUpdate = await db.Currencies_sell.findAll({
                where: { moneda: game },
            });
        }

        for (let index = 0; index < prices.length; index++) {
            const price = prices[index];

            await serversToUpdate[index].update({ precio: price });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
async function updateStore(game, prices) {
    try {
        if (prices.length === 0) {
            throw new Error("No se proporcionaron precios para actualizar");
        }

        let serversToUpdate;

        if (game == "all") {
            serversToUpdate = await db.Products.findAll();
        } else {
            serversToUpdate = await db.Products.findAll({
                where: { nombre: game },
            });
        }

        for (let index = 0; index < prices.length; index++) {
            const price = prices[index];

            await serversToUpdate[index].update({ price: price });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
