const express = require("express");
const auth = require("../../middlewares/auth");
const { customerController } = require("../../controllers");

const router = express.Router();

router.route("/create").post(auth("admin"), customerController.createCustomer);
router.route("/all").get(auth("admin"), customerController.getCustomerAll);
router.get("/:id", customerController.getCustomerById);
router
  .route("/delete/:id")
  .delete(auth("admin"), customerController.deleteCustomerById);
router
  .route("/update/:id")
  .put(auth("admin"), customerController.updateCustomerById);
router
  .route("/customer-list")
  .get(auth("admin"), customerController.getDashboardStats);

module.exports = router;
