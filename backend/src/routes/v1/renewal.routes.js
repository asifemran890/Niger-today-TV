const express = require("express");
const auth = require("../../middlewares/auth");
const { renewalController } = require("../../controllers");

const router = express.Router();

router.route("/create").post(auth("admin"), renewalController.createRenewal);
router.route("/get-all").get(auth("admin"), renewalController.getRenewalAll);
router
  .route("/update/:customerId")
  .put(auth("admin"), renewalController.updateRenewal);

module.exports = router;
