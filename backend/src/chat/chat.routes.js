const express = require("express");
const { handleChat } = require("./chat.controller");

const router = express.Router();

router.post("/chat", handleChat);

module.exports = router;
