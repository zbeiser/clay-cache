const { Schema, model } = require("mongoose");

const claySchema = new Schema({
  clayName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Clay = model("Clay", claySchema);

module.exports = Clay;