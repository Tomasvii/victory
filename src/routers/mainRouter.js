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

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

const storeRouter = require("./storeRouter");
router.use("/store", storeRouter);

module.exports = router;
