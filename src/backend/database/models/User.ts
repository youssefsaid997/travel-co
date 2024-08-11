import authService from "@/backend/services/auth-service";
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
    unique: true,
  },
  password: {
    type: String,
    requried: [true, "Password is required!"],
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

//mongoose hooks: pre , post
// "save" => pre save : before saving into database ()=>{}
// "save" => post save : after saving into database ()=>{}

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.password) {
    const hashedPassword = await authService.signup(user.password);
    this.password = hashedPassword;
  }
  //function bycrpt used to hash password to be saved in the database
  next();
});

// mongoose.models.User ==> because next caches the value of Model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
