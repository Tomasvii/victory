const path = require("path");
const db = require("../../database/models");
const config = require("dotenv");
config.config();

const Stripe = require("stripe");

const SK = process.env.STRIPE_SKL;
const SWH = process.env.STRIPE_WH;

const stripe = new Stripe(SK);

module.exports = {
    home: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("./en/home", {
            games: games,
        });
    },
};
