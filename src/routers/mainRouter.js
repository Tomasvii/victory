const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

router.post("/create-checkout-session", mainController.check);
router.post("/webhook", mainController.webhook);
router.get("/success", mainController.success);

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

module.exports = router;
