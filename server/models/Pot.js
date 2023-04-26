const { Schema, model } = require("mongoose");

const potSchema = new Schema({
  potName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxLength: 50,
  },
  potType: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  clayType: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clay',
      required: true,
    },
  ],
  glazes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Glaze',
    },
  ],
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  width: {
    type: Number,
  },
  notes: {
    type: String,
    trim: true,
    maxLength: 280,
  },
  dateFired: {
    type: Date,
  },
  firingType: {
    type: String,
  }
});

const Pot = model("Pot", potSchema);

module.exports = Pot;