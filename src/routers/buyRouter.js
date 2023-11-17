const { Router } = require("express");
const buyController = require("../controllers/buyController");
const router = Router();

router.get("/5", buyController.osrs);

router.get("/6", buyController.albion);

router.get("/:gameId", buyController.games);

router.get("/:gameId/:serverId", buyController.server);

router.get("/:gameId/:serverId/:factionId", buyController.faction);

module.exports = router;
