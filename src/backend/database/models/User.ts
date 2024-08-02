import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requried: [true, "Username is required!"],
  },
  age: {
    type: Number,
    requried: [true, "Age is required!"],
  },
  email: {
    type: String,
    requried: [true, "Email is required!"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
