const path = require("path");
const db = require("../../database/models");

module.exports = {
    buy: async (req, res) => {
        const games = await db.Games.findAll();
        return res.render("./en/buy", {
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

        if (!game || !servers) {
            return res.status(404).render("notFound");
        }

        return res.render("./en/games", {
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

        const vesDb = await db.Currencies.findAll({
            where: {
                id: 1,
            },
        });

        const copDb = await db.Currencies.findAll({
            where: {
                id: 2,
            },
        });

        const ves = Math.round(vesDb[0].precio * 100) / 100;
        const cop = Math.round(copDb[0].precio * 100) / 100;

        return res.render("./en/osrs", {
            games: games,
            game: game,
            server: server,
            ves: ves,
            cop: cop,
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

        const vesDb = await db.Currencies.findAll({
            where: {
                id: 1,
            },
        });

        const copDb = await db.Currencies.findAll({
            where: {
                id: 2,
            },
        });

        const ves = Math.round(vesDb[0].precio * 100) / 100;
        const cop = Math.round(copDb[0].precio * 100) / 100;

        return res.render("./en/albion", {
            games: games,
            game: game,
            server: server,
            ves: ves,
            cop: cop,
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

        if (!game || !server[0]) {
            return res.status(404).render("notFound");
        }

        return res.render("./en/server", {
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

        const preserver = await db.Servers.findAll({
            where: {
                servidor_id: req.params.serverId,
            },
        });

        const server = await db.Servers.findAll({
            where: {
                nombre: preserver[0].nombre,
                faccion_id: req.params.factionId,
            },
        });

        const factions = await db.Factions.findAll();
        const faction = await db.Factions.findByPk(req.params.factionId);

        if (!game || !servers[0] || !faction) {
            return res.status(404).render("notFound");
        }

        const vesDb = await db.Currencies.findAll({
            where: {
                id: 1,
            },
        });

        const copDb = await db.Currencies.findAll({
            where: {
                id: 2,
            },
        });

        const ves = Math.round(vesDb[0].precio * 100) / 100;
        const cop = Math.round(copDb[0].precio * 100) / 100;

        return res.render("./en/faction", {
            games: games,
            game: game,
            servers: servers,
            server: server,
            factions: factions,
            faction: faction,
            ves: ves,
            cop: cop,
        });
    },
};
