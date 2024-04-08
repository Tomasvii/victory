const { Router } = require("express");
const mainController = require("../../controllers/en/mainController");
const router = Router();

router.get("/", mainController.home);

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

const sellRouter = require("./sellRouter");
router.use("/sell", sellRouter);

const storeRouter = require("./storeRouter");
router.use("/store", storeRouter);

module.exports = router;
