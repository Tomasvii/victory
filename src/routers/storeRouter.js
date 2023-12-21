const { Router } = require("express");
const storeController = require("../controllers/storeController");
const router = Router();

router.get("/", storeController.allProducts);
router.get("/BattleNet", storeController.battlenet);

module.exports = router;
