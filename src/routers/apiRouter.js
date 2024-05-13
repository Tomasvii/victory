const { Router } = require("express");
const apiController = require("../controllers/apiController");
const router = Router();

const config = require("dotenv");
config.config();

const ADMIN = process.env.ADMIN;

router.get(`/${ADMIN}`, apiController.orders);
router.put(`/${ADMIN}/:id`, apiController.update);
router.get(`/${ADMIN}/games`, apiController.games);
router.get(`/${ADMIN}/currencies`, apiController.currencies);
router.get(`/${ADMIN}/products`, apiController.products);

module.exports = router;
