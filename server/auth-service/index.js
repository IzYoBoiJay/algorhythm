const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

global.access_token = null;

var app = express();

app.use(cors());

app.set("port", process.env.PORT);

app.use(morgan("tiny"));

app.use("/", routes);

app.listen(app.get("port"), () => {
  /* eslint-disable no-console */
  console.log("auth-service is running at localhost:" + app.get("port"));
  /* eslint-enable no-console */
});

//app.use(express.static(path.join(__dirname, '../build')));
