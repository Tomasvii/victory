const path = require("path");
const db = require("../database/models");
const config = require("dotenv");
config.config();

const Stripe = require("stripe");

const SK = process.env.STRIPE_SKT;

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
        console.log(game[0]);
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
            mode: "payment",
            success_url: "https://5b79-190-137-77-66.ngrok-free.app/success",
            cancel_url: "http://localhost:3000/",
        });
        return res.json(session);
    },
    webhook: async (req, res) => {
        const payload = req.body;
        const sig = req.headers["stripe-signature"];

        try {
            // Verificar la firma del webhook
            const event = stripe.webhooks.constructEvent(
                payload,
                sig,
                "whsec_tXdAtDXjb9okoaah6tMS7XyTC0jbVHE5"
            );

            // Manejar el evento según su tipo
            switch (event.type) {
                case "payment_intent.succeeded":
                    // Guardar información relevante en tu base de datos u otro almacenamiento
                    // Puedes utilizar una librería de base de datos como Sequelize o Mongoose aquí
                    // Ejemplo: await db.guardarInformacionDePago(event.data.object);
                    break;
                // Puedes manejar otros eventos según tus necesidades

                default:
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
    success: (req, res) => {
        const checkoutSessionId = req.query.payment_intent;

        // Obtén más detalles sobre la sesión de pago desde tu servidor o la API de Stripe
        // Esto podría implicar una llamada a tu servidor o a la API de Stripe
        // Ejemplo ficticio:
        const paymentDetails = getPaymentDetailsFromServer(checkoutSessionId);

        console.log("ID de la sesión de pago en éxito:", checkoutSessionId);
        console.log("Detalles del pago:", paymentDetails);

        // Muestra información al cliente según sea necesario
        return res.send(`Gracias por tu compra :D ${checkoutSessionId}`);
    },
};
