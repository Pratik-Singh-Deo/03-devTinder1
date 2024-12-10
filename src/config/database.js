const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://pratiksinghdeo04:ZrUzBqle69BA6H5c@namastenode.tvnmz.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
