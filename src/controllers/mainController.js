const path = require("path");
const db = require("../database/models");

module.exports = {
    home: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("home", {
            games: games,
        });
    },
};
