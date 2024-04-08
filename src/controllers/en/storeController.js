const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

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
        return res.render("./en/store", {
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
        return res.render("./en/store", {
            categories: categories,
            products: products,
        });
    },
    pc: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: false },
            { category: "BattleNet", value: "BattleNet", selected: false },
            { category: "PC", value: "PC", selected: true },
            { category: "Xbox", value: "Xbox", selected: false },
            { category: "PSN", value: "PSN", selected: false },
            { category: "Mobile", value: "Mobile", selected: false },
        ];
        const products = await db.Products.findAll({
            where: {
                plataforma: "PC",
            },
        });
        return res.render("./en/store", {
            categories: categories,
            products: products,
        });
    },
    xbox: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: false },
            { category: "BattleNet", value: "BattleNet", selected: false },
            { category: "PC", value: "PC", selected: false },
            { category: "Xbox", value: "Xbox", selected: true },
            { category: "PSN", value: "PSN", selected: false },
            { category: "Mobile", value: "Mobile", selected: false },
        ];
        const products = await db.Products.findAll({
            where: {
                plataforma: "Xbox",
            },
        });
        return res.render("./en/store", {
            categories: categories,
            products: products,
        });
    },
    psn: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: false },
            { category: "BattleNet", value: "BattleNet", selected: false },
            { category: "PC", value: "PC", selected: false },
            { category: "Xbox", value: "Xbox", selected: false },
            { category: "PSN", value: "PSN", selected: true },
            { category: "Mobile", value: "Mobile", selected: false },
        ];
        const products = await db.Products.findAll({
            where: {
                plataforma: "PSN",
            },
        });
        return res.render("./en/store", {
            categories: categories,
            products: products,
        });
    },
    mobile: async (req, res) => {
        const categories = [
            { category: "All", value: "", selected: false },
            { category: "BattleNet", value: "BattleNet", selected: false },
            { category: "PC", value: "PC", selected: false },
            { category: "Xbox", value: "Xbox", selected: false },
            { category: "PSN", value: "PSN", selected: false },
            { category: "Mobile", value: "Mobile", selected: true },
        ];
        const products = await db.Products.findAll({
            where: {
                plataforma: "Mobile",
            },
        });
        return res.render("./en/store", {
            categories: categories,
            products: products,
        });
    },
    detail: async (req, res) => {
        const product = await db.Products.findAll({
            where: {
                id: req.params.id,
            },
        });

        if (!product[0]) {
            return res.status(404).render("notFound");
        }

        const products = await db.Products.findAll({
            where: {
                id: {
                    [Op.not]: req.params.id,
                },
            },
            order: db.sequelize.literal("RAND()"),
            limit: 4,
        });

        const requisitos_minimos = product[0].requisitos_minimos.split("_");
        const requisitos_recomendados =
            product[0].requisitos_recomendados.split("_");

        return res.render("./en/detail", {
            product: product[0],
            products: products,
            requisitos_minimos: requisitos_minimos,
            requisitos_recomendados: requisitos_recomendados,
        });
    },
};
