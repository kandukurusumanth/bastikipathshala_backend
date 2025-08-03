const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'password must be at least 3 characters long'],
      maxlength: [20, 'password cannot exceed 20 characters']
    },
    role: {
      type: String,
      enum: ["ADMIN", "VOLUNTEERS", "INTERNS"],
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
