const { Schema, model } = require("mongoose");

const glazeSchema = new Schema({
  glazeName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Glaze = model("Glaze", glazeSchema);

module.exports = Glaze;