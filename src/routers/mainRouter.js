const { Router } = require("express");
const router = Router();

const config = require("dotenv");
config.config();

const ADMIN = process.env.ADMIN;

const { authenticateAdmin } = require("../middlewares/admin");

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

router.post("/create-checkout-session", mainController.check);
router.post("/create-checkout-session-store", mainController.checkStore);
router.post("/webhook", mainController.webhook);
router.get("/success/:transactionId", mainController.success);
router.get("/success-store/:transactionId", mainController.successStore);

router.get(`/${ADMIN}`, mainController.admin_log);
router.post("/admin", authenticateAdmin, mainController.admin);
router.post("/updateOrder", mainController.updateOrder);
router.post("/process-prices", mainController.processPrices);
router.post("/process-prices-sell", mainController.processPrices_sell);
router.post(
    "/process-prices-currencies",
    mainController.processPrices_currencies
);
router.post(
    "/process-prices-currencies-sell",
    mainController.processPrices_currencies_sell
);

router.get("/privacy", mainController.privacy);
router.get("/copyright", mainController.copyright);
router.get("/about-us", mainController.aboutUs);
router.get("/terms-of-service", mainController.terms);
router.get("/contact-us", mainController.contact);

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

const sellRouter = require("./sellRouter");
router.use("/sell", sellRouter);

const storeRouter = require("./storeRouter");
router.use("/store", storeRouter);

module.exports = router;
