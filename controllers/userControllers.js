const InstaModel = require("../models/InstaModel");
const createAppoinment = async (req, res) => {
  try {
    const request = req.body;
    const appoinmnet = new AppointmentModel(request);
    await appoinmnet.save();
    res.status(200).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Error during user registration", error);
    res.status(400).json({ message: error.message });
  }
};
const instaregistration = async (req, res) => {
  const request=req.body
  console.log(req.user);
  try {
    const isPresent = await InstaModel.exists({ instaId: request.instaId });
    if (!isPresent) {
      const result = await InstaModel.create({
        ...request,
        userId: req.user.id,
      });
      console.log(result);
      res
        .status(200)
        .json({ message: "Registration suceefully", status: true, result });
      return;
    }
    res.status(404).json({ message: "Insta id alredy exist", status: false });
  } catch (error) {
    console.error("Error during user registration", error);
    res.status(400).json({ message: error.message });
  }
};
const getInstance = async (req, res) => {
  try {
    const result = await InstaModel.findOne({ userId: req.user.id });
    res
      .status(200)
      .json({ status: true, result });
  } catch (error) {
    console.error("No instance found", error);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createAppoinment, instaregistration,getInstance };
