const { Router } = require("express");
const gameController = require("../controllers/gameController");
const router = Router();

router.get("/5", gameController.osrs);

router.get("/6", gameController.albion);

router.get("/:gameId", gameController.games);

router.get("/:gameId/:serverId", gameController.server);

router.get("/:gameId/:serverId/:factionId", gameController.faction);

module.exports = router;
