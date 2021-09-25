const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_dev");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}

module.exports = { connect };
