const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

const gameRouter = require("./gameRouter");
router.use("/game", gameRouter);

module.exports = router;
