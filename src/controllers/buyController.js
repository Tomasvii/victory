const path = require("path");
const db = require("../database/models");

module.exports = {
    buy: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("buy", {
            games: games,
        });
    },

    games: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        return res.render("games", {
            games: games,
            game: game,
            servers: servers,
        });
    },

    osrs: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(5);

        const server = await db.Servers.findAll({
            where: {
                juego_id: 5,
            },
        });

        return res.render("osrs", {
            games: games,
            game: game,
            server: server,
        });
    },

    albion: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(6);

        const server = await db.Servers.findAll({
            where: {
                juego_id: 6,
            },
        });

        return res.render("albion", {
            games: games,
            game: game,
            server: server,
        });
    },

    server: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        const server = await db.Servers.findAll({
            where: {
                servidor_id: req.params.serverId,
            },
        });

        return res.render("server", {
            games: games,
            game: game,
            servers: servers,
            server: server,
        });
    },

    faction: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        const server = await db.Servers.findAll({
            where: {
                servidor_id: req.params.serverId,
            },
        });

        const factions = await db.Factions.findAll();
        const faction = await db.Factions.findByPk(req.params.factionId);

        return res.render("faction", {
            games: games,
            game: game,
            servers: servers,
            server: server,
            factions: factions,
            faction: faction,
        });
    },
};
