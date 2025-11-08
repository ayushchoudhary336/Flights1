const express = require("express");
const app = express();
const apiRoutes = require("./routes");

const { serverConfig, Logger } = require("./config");

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello bhai, backend running!");
});

app.listen(serverConfig.PORT, () => {
  console.log(`app is listening on the ${serverConfig.PORT}`);
  Logger.info("successfully started the server", "root");
});
