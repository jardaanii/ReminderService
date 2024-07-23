const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { server } = require("live-server");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(3004, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

setupAndStartServer();
