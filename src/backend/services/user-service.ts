import { Document } from "mongoose";
import { connectDB, disconnectDB } from "../database/connection/connection";
import User from "../database/models/User";
import IUser from "../types/IUser";

const users: IUser[] = [];
class UserService {
  constructor() {}

  async createUser(user: IUser) {
    //here will be the code from the database
    await connectDB();
    const newUser = new User(user);
    const createdUser = await newUser.save();
    await disconnectDB();
    return createdUser;
  }
  async getUserById(userId: string): Promise<IUser | Document> {
    // const user = users.find((user) => user.id === userId);
    await connectDB();
    const user = await User.findById(userId);
    // await db.disconnectDB();
    if (!user) {
      throw new Error("User doesnt exist!");
    }
    await disconnectDB();
    return user;
  }
  async getUsers() {
    await connectDB();
    const users = await User.find({});
    await disconnectDB();
    return users;
  }
  async updateUserById(id: string, user: IUser) {}
  async deleteUserById(id: string) {}
}

const userService = new UserService();
export default userService;
