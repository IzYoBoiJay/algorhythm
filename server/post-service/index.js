const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

app.set("port", process.env.PORT);

app.use("/", routes);

mongoose.connect(
  "mongodb://post-db/db",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("post-service connected to mongo successfully");
  }
);

app.listen(app.get("port"), () => {
  /* eslint-disable no-console */
  console.log("post-service is running at localhost:" + app.get("port"));
  /* eslint-enable no-console */
});
