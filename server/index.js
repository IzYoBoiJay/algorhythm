const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");

const port = 5000;

global.access_token = "";

var app = express();

app.use(morgan("combined"));

app.use("/", routes);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

//app.use(express.static(path.join(__dirname, '../build')));
