const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");

const config = require("dotenv");
config.config();

const ADMIN = process.env.ADMIN;

module.exports = {
    orders: (req, res) => {
        db.Orders.findAll({
            limit: 20,
            order: [
                ["delivered", "ASC"],
                ["created_at", "DESC"],
            ],
        }).then((orders) => {
            return res.json(orders);
        });
    },
    update: (req, res) => {
        let orderId = req.params.id;
        console.log(orderId);
        console.log(req.body);
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
};
