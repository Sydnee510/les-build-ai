const app = require("./src/app");
const env = require("./src/config/env");

app.listen(env.PORT, () => {
  console.log(`Server running at http://localhost:${env.PORT}`);
});
