const { Router } = require("express");
const storeController = require("../controllers/storeController");
const router = Router();

router.get("/", storeController.allProducts);
router.get("/BattleNet", storeController.battlenet);
router.get("/PC", storeController.pc);
router.get("/Xbox", storeController.xbox);
router.get("/PSN", storeController.psn);
router.get("/Mobile", storeController.mobile);
router.get("/Software", storeController.software);
router.get("/product/:id", storeController.detail);

module.exports = router;
