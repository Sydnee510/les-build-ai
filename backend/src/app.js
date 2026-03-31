const express = require("express");
const cors = require("cors");
const path = require("path");
const chatRoutes = require("./chat/chat.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Serve the frontend
app.use(express.static(path.join(__dirname, "../../frontend/public")));

// Register routes
app.use(chatRoutes);

module.exports = app;
