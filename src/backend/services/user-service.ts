import { Document } from "mongoose";
import connectDB from "../database/connection/connection";
import User from "../database/models/User";
import IUser from "../types/IUser";

const users: IUser[] = [];
class UserService {
  constructor() {}

  async createUser(user: IUser) {
    //here will be the code from the database
    const db = await connectDB();
    const newUser = new User(user);
    const createdUser = await newUser.save();
    console.log("we will disconnect");
    await db.disconnect();
    return createdUser;
  }
  async getUserById(userId: string): Promise<IUser | Document> {
    // const user = users.find((user) => user.id === userId);
    const db = await connectDB();
    const user = await User.findById(userId);
    await db.disconnect();
    if (!user) {
      throw new Error("User doesnt exist!");
    }
    return user;
  }
  async getUsers() {
    return users;
  }
  async updateUserById(id: string, user: IUser) {}
  async deleteUserById(id: string) {}
}

const userService = new UserService();
export default userService;
