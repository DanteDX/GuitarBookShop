const express = require("express");
const router = express.Router();
const PlaceOrder = require("../model/PlaceOrder");

router.post("/approveOrder", async (req, res) => {
  try {
    const response = await PlaceOrder.findOneAndUpdate(
      { orderId: req.body.orderId },
      { $set: { orderStatus: "confirmed" } }
    );
    res.json(response);
  } catch (err) {
    console.log(err);
    res.send("server Error");
  }
});

router.post("/declineOrder", async (req, res) => {
    try {
      const response = await PlaceOrder.findOneAndUpdate(
        { orderId: req.body.orderId },
        { $set: { orderStatus: "declined" } }
      );
      res.json(response);
    } catch (err) {
      console.log(err);
      res.send("server Error");
    }
  });

  router.post("/deleteOrder", async (req, res) => {
    const _id  = req.body._id;
    try {
      const response = await PlaceOrder.deleteOne({_id});
      res.json(response);
    } catch (err) {
      console.log(err);
      res.send("server Error");
    }
  });

module.exports = router;
