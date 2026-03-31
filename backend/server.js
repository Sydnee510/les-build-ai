/*
 * ============================================================
 * SERVER.JS — Entry Point
 * ============================================================
 *
 * This file does ONE thing: starts the server.
 * All the app logic lives in src/app.js.
 *
 * Run this file with: npm start
 *
 * ============================================================
 */

const app = require("./src/app");
const env = require("./src/config/env");

// CHALLENGE: The default port is 3000. You can change it in your .env file
// by adding PORT=8080 (or any number you want)
app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`);
});
