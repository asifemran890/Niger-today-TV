const express = require("express");
const auth = require("../../middlewares/auth");
const { renewalController } = require("../../controllers");

const router = express.Router();

router.route("/create").post(auth("admin"), renewalController.createRenewal);
router
  .route("/renewal-all")
  .get(auth("admin"), renewalController.getRenewalAll);

module.exports = router;
