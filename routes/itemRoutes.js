const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/", itemController.list);
router.get("/:id", itemController.detail);
router.post("/", itemController.create);
router.put("/:id", itemController.update);
router.delete("/:id", itemController.delete);

module.exports = router;
