const mongoose = require("mongoose");

const { Schema } = mongoose;

const boardSchema = new Schema({
  boardName: {
    type: String,
    required: true,
  },
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
