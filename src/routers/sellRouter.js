const { Router } = require("express");
const sellController = require("../controllers/sellController");
const router = Router();

router.get("/", sellController.sell);

router.get("/game/5", sellController.osrs);

router.get("/game/6", sellController.albion);

router.get("/game/:gameId", sellController.games);

router.get("/game/:gameId/:serverId", sellController.server);

router.get("/game/:gameId/:serverId/:factionId", sellController.faction);

module.exports = router;
