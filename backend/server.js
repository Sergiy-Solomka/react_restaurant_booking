const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 80;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const bookingSchema = new mongoose.Schema({
  date: String,
  time: String,
  amount: Number,
  name: String,
  requests: String,
  contact: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.route("/bookings")
  .get(async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.send(bookings);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  .post(async (req, res) => {
    try {
      const newBooking = new Booking(req.body);
      await newBooking.save();
      res.json({ message: "Booking saved" });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

app.route("/bookings/:id")
  .get(async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        res.send(booking);
      } else {
        res.status(404).send({ error: "No matching booking found" });
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  .patch(async (req, res) => {
    try {
      await Booking.updateOne({ _id: req.params.id }, { $set: req.body });
      res.json({ message: "Booking updated successfully" });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      await Booking.findByIdAndRemove(req.params.id);
      res.json({ message: "Booking deleted successfully" });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost/${PORT}`);
});
