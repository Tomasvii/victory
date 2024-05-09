const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");

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
};
