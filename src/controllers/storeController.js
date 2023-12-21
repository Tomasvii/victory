const path = require("path");
const db = require("../database/models");

module.exports = {
    allProducts: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: true },
            { category: "BattleNet", value: "BattleNet", selected: false },
            { category: "PC", value: "PC", selected: false },
            { category: "Xbox", value: "Xbox", selected: false },
            { category: "PSN", value: "PSN", selected: false },
            { category: "Mobile", value: "Mobile", selected: false },
        ];
        const products = await db.Products.findAll();
        return res.render("store", {
            categories: categories,
            products: products,
        });
    },
    battlenet: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: false },
            { category: "BattleNet", value: "BattleNet", selected: true },
            { category: "PC", value: "PC", selected: false },
            { category: "Xbox", value: "Xbox", selected: false },
            { category: "PSN", value: "PSN", selected: false },
            { category: "Mobile", value: "Mobile", selected: false },
        ];
        const products = await db.Products.findAll({
            where: {
                plataforma: "BattleNet",
            },
        });
        return res.render("store", {
            categories: categories,
            products: products,
        });
    },
};
