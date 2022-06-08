require("dotenv").config();

const express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(__dirname, { index: "_" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

const routes = require("./routes/mainPageRoutes.js");

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
