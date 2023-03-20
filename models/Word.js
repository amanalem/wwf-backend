const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Word = mongoose.model("Word", wordSchema);

module.exports = Word;
