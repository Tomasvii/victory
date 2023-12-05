const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

router.post("/create-checkout-session", mainController.check);
router.get("/success", mainController.success);
router.get("/cancel", mainController.cancel);

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

module.exports = router;
