const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

const buyRouter = require("./buyRouter");
router.use("/buy", buyRouter);

module.exports = router;
