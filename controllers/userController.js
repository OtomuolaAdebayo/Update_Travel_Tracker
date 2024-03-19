const User = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, age, country } = req.body;

    if (!name || !age || !country) {
      res.status(400).json({ error: "please enter correct credentials" });
    }

    const newUser = new User({
      name, age, country
    })
    const saved_new_user = await newUser.save();
    res.status(200).json({message: "User created successfully", saved_new_user});
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUserInfo = await User.findByIdAndDelete(id);
    res.status(200).json({message: "User deleted", deleteUserInfo});
  } catch (error) {
    res.status(400).json({ error: "User does not exist" });
  }
};

module.exports = {
  createUser,
  deleteUser,
};
