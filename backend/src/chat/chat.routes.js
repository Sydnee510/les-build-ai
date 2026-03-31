/*
 * ============================================================
 * CHAT.ROUTES.JS — Registers the Chat API Endpoint
 * ============================================================
 *
 * This file defines which URL the frontend calls to send
 * messages to the AI. Right now it's POST /chat.
 *
 * CHALLENGE: You could add more routes later! Ideas:
 *   - GET /chat/history — return conversation history
 *   - POST /chat/reset  — clear the conversation and start fresh
 *   - GET /chat/documents — list available RAG documents
 *
 * ============================================================
 */

const express = require("express");
const { handleChat } = require("./chat.controller");

const router = express.Router();

// POST /chat — Send a message to the AI and get a response
router.post("/chat", handleChat);

module.exports = router;
