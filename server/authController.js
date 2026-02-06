const User = require("./user_model.js")
const jwt = require("jsonwebtoken")

/* ================= SIGNUP ================= */
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields required" });

    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(409).json({ message: "User already exists" });

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
};

/* ================= LOGIN ================= */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Missing credentials" });

    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};


// controller for card 

const addCardForOrder = async (req, res) => {
  try {
    const {
      cardHolderName,
      cardToken,
      last4,
      expiryMonth,
      expiryYear,
      cvv,

      // billing fields
      country,
      city,
      address,
      state,
      zipCode,
      contactNumber,
    } = req.body;

    if (
      !cardHolderName ||
      !last4 ||
      !expiryMonth ||
      !expiryYear ||
      !cvv ||
      !country ||
      !city ||
      !address ||
      !zipCode
    ) {
      return res.status(400).json({
        message: "Missing card or billing fields",
      });
    }

    const user = req.user;

    user.savedCards.push({
      cardHolderName,
      cardToken,
      last4,
      expiryMonth,
      expiryYear,
      cvv,

      billingAddress: {
        country,
        city,
        address,
        state,
        zipCode,
        contactNumber,
      },
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Card + billing address saved",
      savedCards: user.savedCards,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to save card",
    });
  }
};



module.exports = {login, signup,addCardForOrder}