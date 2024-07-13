const { Router } = require("express");
const sellController = require("../../controllers/en/sellController");
const router = Router();

router.get("/", sellController.sell);

router.get("/game/5", sellController.osrs);

router.get("/game/6", sellController.albion);

router.get("/game/6/:serverId", sellController.albion_server);

router.get("/game/:gameId", sellController.games);

router.get("/game/:gameId/:serverId", sellController.server);

router.get("/game/:gameId/:serverId/:factionId", sellController.faction);

module.exports = router;
