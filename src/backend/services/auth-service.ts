import IUser from "../types/IUser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../database/models/User";
import connectDB from "../database/connection/connection";
import { ApiError } from "next/dist/server/api-utils";

// TODO : Custome Error Class to specify the message and status code

class AuthService {
  constructor() {}

  private _KEY = process.env.JWT_SECRET || "";
  async signup(userPass: string) {
    //we need to get the password and hash the password and return it to the hook
    const userPassword = userPass;
    const salt = parseInt(process.env.SALT_KEY || "");
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return hashedPassword;
  }
  async login(user: IUser) {
    if (!user.email || !user.password) {
      throw new ApiError(400, "Please check your inputs");
    }
    const db = await connectDB();
    const loggedInUser = await User.findOne({ email: user.email });

    if (!loggedInUser) {
      throw new ApiError(400, "Please create an account , User not found!");
    }
    const isCorrectPassword = await bcrypt.compare(
      user.password,
      loggedInUser.password
    );

    if (!isCorrectPassword) throw new ApiError(400, "Wrong password");
    if (isCorrectPassword) {
      const payload = {
        role: loggedInUser.role,
        email: loggedInUser.email,
        id: loggedInUser._id,
      };
      const KEY = process.env.JWT_SECRET || "";
      const token = jwt.sign(payload, KEY);
      //   await db.disconnect();

      return token;
    }
  }

  async verifyUser(token: string) {
    if (!token) throw "please login!";
    const isValidToken = jwt.verify(token, this._KEY);
    if (!isValidToken)
      throw new ApiError(400, "please login you are not authorized");
    const decoded = jwt.decode(token);
    return decoded;
  }
}

const authService = new AuthService();
export default authService;
