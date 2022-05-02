const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@+\..+/, "Email address must watch"],
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  carts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    console.log(saltRounds);
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});
