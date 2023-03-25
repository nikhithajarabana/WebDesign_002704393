
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://jarabanan:nikhithajarabana@cluster0.slafozy.mongodb.net/test"
    
  )
  .then(() => {
    console.log("Connected to Mongo DB");
  });
 
app.use(express.json());
app.use(cors());
app.get("/api/user", (req, res, next) => {
  res.send("Hello There!");
});

app.post("/user/createUser", (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "New user has been added successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

app.get("/user/getUser", (req, res, next) => {
  User.find()
    .select([])
    .then((documents) => {
      res.status(200).json({
        message: "All the users details have been fetched successfully",
        users: documents,
      });
    });
});
app.delete("/user/deleteUser", async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).json({ message: "Please provide an email" });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found.Enter existing email" });
    }
    await User.deleteOne({ email: req.body.email });
    return res.status(200).json({ message: "User has been deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting user" });
  }
});
app.put("/user/editUser", async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    // Validate input
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's password and full name
    user.password = password;
    user.fullName = fullName;

    // Save the user
    try {
      await user.save();
      res.status(200).json({ message: "User has been updated successfully" });
    } catch (saveError) {
      console.error(saveError);
      res.status(500).json({ message: "Error updating user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing request" });
  }
});

app.listen(500, () => {
  console.log("Server started on port 500");
});
