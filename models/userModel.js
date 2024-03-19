const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true,
  },
  country:{
    type: String,
    required: true,
  },
});

// const User = mongoose.model("User", userSchema);

// module.exports = User;
module.exports = mongoose.model("User", userSchema)