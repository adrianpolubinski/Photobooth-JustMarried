const { render } = require("ejs");
const reservation = require("../models/reservation");

exports.admin = async (req, res) => {
  try {
    reservation.find({ Accepted: "No" }, (err, docs) => {
      res.render("admin", {
        title: "Just Married || Administracja",
        reservations: docs,
      });
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const { action, id } = req.body;

    if (action === "Accept") {
      reservation.updateOne(
        { _id: id },
        { $set: { Accepted: "Yes" } },
        (err, doc) => {
          console.log("Aktualizacja pomyślna");
        }
      );
      res.redirect("/admin");
    } else {
      reservation.deleteOne({ _id: id }, (err, doc) => {
        console.log("Usunieto pomyślne");
      });
      res.redirect("/admin");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
