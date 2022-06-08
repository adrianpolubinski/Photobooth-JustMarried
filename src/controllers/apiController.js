const Reservation = require("../models/reservation");
exports.reservations = async (req, res) => {
  try {
    Reservation.find({}, (err, docs) => {
      const dates = [];
      for (doc of docs) {
        dates.push(doc.Date);
      }
      res.json(dates);
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
