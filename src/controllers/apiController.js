const Reservation = require("../models/reservation");
exports.reservations = async (req, res) => {
  try {
    let params = req.params.month + "-" + req.params.year;
    params = params.replaceAll("undefined", "");
    Reservation.find(
      { Date: { $regex: params, $options: "i" } },
      (err, docs) => {
        res.json(docs);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};
