const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
	},
  pots: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pot',
    },
  ],
  glazes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Glaze',
    },
  ],
  clay: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clay',
    },
  ],
});

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

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

module.exports = User;
