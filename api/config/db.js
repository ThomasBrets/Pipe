const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log("Failed to connect to mongodb", err));

module.exports = mongoose;
