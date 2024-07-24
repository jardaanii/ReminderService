const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { server } = require("live-server");

const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(3004, () => {
    console.log(`Server started at port ${PORT}`);
    sendBasicEmail(
      "support@admin.con",
      "prajjawalkansara@gmail.com",
      "This is a testing email",
      "Hey how are you , Hope you like our support"
    );
  });
};

setupAndStartServer();
