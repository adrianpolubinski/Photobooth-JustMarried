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
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/admin", require("./routes/adminRoutes.js"));
app.use("/signin", require("./routes/signinRoutes.js"));
app.use("/", require("./routes/mainPageRoutes.js"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
