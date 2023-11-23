const { Router } = require("express");
const buyController = require("../controllers/buyController");
const router = Router();

router.get("/", buyController.buy);

router.get("/game/5", buyController.osrs);

router.get("/game/6", buyController.albion);

router.get("/game/:gameId", buyController.games);

router.get("/game/:gameId/:serverId", buyController.server);

router.get("/game/:gameId/:serverId/:factionId", buyController.faction);

module.exports = router;
