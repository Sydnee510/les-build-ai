/*
 * ============================================================
 * APP.JS — Express App Setup
 * ============================================================
 *
 * This file wires everything together:
 *   - Middleware (CORS, JSON parsing)
 *   - Static file serving (your frontend)
 *   - Route registration (your API endpoints)
 *
 * CHALLENGE: You can add more middleware or routes here as
 * your app grows!
 *
 * ============================================================
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
const chatRoutes = require("./chat/chat.routes");

const app = express();

// Allow requests from other origins (needed if frontend is hosted separately)
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Serve the frontend files (HTML, CSS, JS) from the public folder
app.use(express.static(path.join(__dirname, "../../frontend/public")));

// Register the chat API routes
app.use(chatRoutes);

module.exports = app;
