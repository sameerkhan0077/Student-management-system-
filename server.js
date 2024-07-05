const app = require("./app/app");
const config = require("./config.js");
const port = config.DEFAULT_PORT;

app.listen(port, "localhost", () => {
  console.log(`server start port ${port}`);
});
console.log(true - false);
