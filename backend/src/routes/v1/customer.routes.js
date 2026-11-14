const express = require("express");
const auth = require("../../middlewares/auth");
const { customerController } = require("../../controllers");

const router = express.Router();

router.route("/create").post(auth("admin"), customerController.createCustomer);
router.route("/all").get(auth("admin"), customerController.getCustomerAll);
router.get("/:id", customerController.getCustomerById);

module.exports = router;
