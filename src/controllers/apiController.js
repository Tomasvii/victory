const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");

const config = require("dotenv");
config.config();

const ADMIN = process.env.ADMIN;

module.exports = {
    orders: (req, res) => {
        try {
            let { page = 1, pageSize = 20 } = req.query;
            const offset = (page - 1) * pageSize;

            pageSize = parseInt(pageSize);

            db.Orders.findAndCountAll({
                limit: pageSize,
                offset: offset,
                order: [
                    ["delivered", "ASC"],
                    ["created_at", "DESC"],
                ],
            }).then((result) => {
                const { count, rows } = result;
                const totalPages = Math.ceil(count / pageSize);

                return res.json({
                    orders: rows,
                    totalPages: totalPages,
                    currentPage: parseInt(page),
                    totalOrders: count,
                });
            });
        } catch (error) {
            console.error("Error en la consulta a la base de datos:", error);
            return res.status(500).json({ error: "Error en el servidor" });
        }
    },
    update: (req, res) => {
        let orderId = req.params.id;
        db.Orders.update(
            {
                delivered: req.body.delivered,
                proof: req.body.proof,
            },
            {
                where: { id: orderId },
            }
        )
            .then((confirm) => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: `/${ADMIN}`,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: `/${ADMIN}/:id`,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    games: (req, res) => {
        try {
            db.Games.findAll().then((games) => {
                return res.json(games);
            });
        } catch (error) {
            console.error("Error en la consulta a la base de datos:", error);
            return res.status(500).json({ error: "Error en el servidor" });
        }
    },
    currencies: (req, res) => {
        try {
            db.Currencies.findAll().then((currencies) => {
                return res.json(currencies);
            });
        } catch (error) {
            console.error("Error en la consulta a la base de datos:", error);
            return res.status(500).json({ error: "Error en el servidor" });
        }
    },
    products: (req, res) => {
        try {
            db.Products.findAll().then((products) => {
                return res.json(products);
            });
        } catch (error) {
            console.error("Error en la consulta a la base de datos:", error);
            return res.status(500).json({ error: "Error en el servidor" });
        }
    },
};
