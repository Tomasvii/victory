const path = require("path");
const db = require("../database/models");
const config = require("dotenv");
config.config();

const Stripe = require("stripe");

const SKT = process.env.STRIPE_SKT;

const stripe = new Stripe(SKT);

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
                            name: req.body.game + " GOLD",
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
                            images: [
                                "https://b.stripecdn.com/docs-statics-srv/assets/e9d184fcb37d32f21df2171a070f5fbc.png",
                            ],
                        },
                        currency: "USD",
                        unit_amount: server[0].price * 100,
                    },
                    quantity: req.body.quantity,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });
        return res.json(session);
    },
    cancel: (req, res) => {
        return res.send("Compra cancelada");
    },
    success: (req, res) => {
        return res.send("Gracias por tu compra :D");
    },
};
