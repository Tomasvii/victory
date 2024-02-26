const path = require("path");
const db = require("../database/models");

module.exports = {
    sell: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("sell", {
            games: games,
        });
    },

    games: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers_sell.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        if (!game || !servers) {
            return res.status(404).render("notFound");
        }

        return res.render("games-sell", {
            games: games,
            game: game,
            servers: servers,
        });
    },

    osrs: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(5);

        const server = await db.Servers_sell.findAll({
            where: {
                juego_id: 5,
            },
        });

        const ves = await db.Currencies_sell.findAll({
            where: {
                id: 1,
            },
        });

        return res.render("osrs-sell", {
            games: games,
            game: game,
            server: server,
            ves: ves,
        });
    },

    albion: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(6);

        const server = await db.Servers_sell.findAll({
            where: {
                juego_id: 6,
            },
        });
        const ves = await db.Currencies_sell.findAll({
            where: {
                id: 1,
            },
        });

        return res.render("albion-sell", {
            games: games,
            game: game,
            server: server,
            ves: ves,
        });
    },

    server: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers_sell.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        const server = await db.Servers_sell.findAll({
            where: {
                servidor_id: req.params.serverId,
            },
        });

        if (!game || !server[0]) {
            return res.status(404).render("notFound");
        }

        return res.render("server-sell", {
            games: games,
            game: game,
            servers: servers,
            server: server,
        });
    },

    faction: async (req, res) => {
        const games = await db.Games.findAll();
        const game = await db.Games.findByPk(req.params.gameId);

        const servers = await db.Servers_sell.findAll({
            where: {
                juego_id: req.params.gameId,
            },
            group: ["nombre"],
        });

        const server = await db.Servers_sell.findAll({
            where: {
                servidor_id: req.params.serverId,
            },
        });

        const factions = await db.Factions.findAll();
        const faction = await db.Factions.findByPk(req.params.factionId);

        if (!game || !servers[0] || !faction) {
            return res.status(404).render("notFound");
        }

        const ves = await db.Currencies_sell.findAll({
            where: {
                id: 1,
            },
        });

        return res.render("faction-sell", {
            games: games,
            game: game,
            servers: servers,
            server: server,
            factions: factions,
            faction: faction,
            ves: ves,
        });
    },
};