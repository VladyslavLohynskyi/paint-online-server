const express = require("express");

const app = express();
const WSserver = require("express-ws")(app);
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(PORT, () => console.log("SERVER IS STARTED! PORT = ", PORT));
  } catch (error) {
    console.log(error);
  }
};

start();
