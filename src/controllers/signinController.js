const { render } = require("ejs");
const reservation = require("../models/reservation");

exports.check = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login == "admin" && password == "123") {
      res.redirect("/admin");
    } else {
      res.render("signin", {
        title: "Just Married || Logowanie",
        err: "błąd",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
