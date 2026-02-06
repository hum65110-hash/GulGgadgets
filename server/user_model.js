const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const billingAddressSchema = new mongoose.Schema({
  country: String,
  city: String,
  address: String,
  state: String,
  zipCode: String,
  contactNumber: String,
});

const cardSchema = new mongoose.Schema({
  cardHolderName: String,

  cardToken: String,

  last4: String,
  expiryMonth: String,
  expiryYear: String,

  cvv: String,

  billingAddress: {
    country: String,
    city: String,
    address: String,
    state: String,
    zipCode: String,
    contactNumber: String,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    billingAddress: billingAddressSchema,

    savedCards: [cardSchema],
  },
  { timestamps: true }
);

/* ---------- PASSWORD HASH ---------- */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/* ---------- PASSWORD COMPARE ---------- */
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports= mongoose.model("User", userSchema);
