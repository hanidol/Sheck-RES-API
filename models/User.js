const mongoose = require("mongoose");

//Shema
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: { type: [String] },
});

module.exports = mongoose.model("User", userSchema);
