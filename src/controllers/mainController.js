const path = require("path");
const db = require("../database/models");
const config = require("dotenv");
config.config();

const Stripe = require("stripe");

const SK = process.env.STRIPE_SKT;
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
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: req.body.game + " Currency",
                            description:
                                req.body.quantity +
                                " K " +
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
                        unit_amount: server[0].price * 100,
                    },
                    quantity: req.body.quantity,
                },
            ],
            metadata: {
                description:
                    req.body.game +
                    "-" +
                    req.body.quantity +
                    " K-" +
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
                "https://e413-181-94-115-111.ngrok-free.app/success/{CHECKOUT_SESSION_ID}",
            cancel_url: "http://localhost:3000/",
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
    admin_log: async (req, res) => {
        return res.render("admin-log");
    },
    admin: async (req, res) => {
        return res.render("admin");
    },
};
