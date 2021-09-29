const mongoose = require("mongoose");

function connect() {
  try {
     mongoose.connect(
      "mongodb+srv://H01263218566:H01263218566@cluster0.h92cq.mongodb.net/my_database?retryWrites=true&w=majority"
    ).then((err=> console.log("Connected to MongoDB")))
   
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}
module.exports = { connect };
