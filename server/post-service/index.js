const express = require("express");
require("dotenv").config();

var app = express();

app.set("port", process.env.PORT);

/* app.use(morgan("combined")); */

app.listen(app.get("port"), () => {
  /* eslint-disable no-console */
  console.log("post-service is running at localhost:" + app.get("port"));
  /* eslint-enable no-console */
});
