const { signup, login, addCardForOrder } = require("./authController.js");
const {protect} = require("./authMiddleware.js")
const express = require('express')

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/order-card",protect,addCardForOrder);

module.exports = router;
