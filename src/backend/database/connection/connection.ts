import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/travelco")
    .then((mongoose) => {
      console.log("connected to DB successfully");
    })
    .catch(() => console.log("there is problem in connection..."));
  return mongoose;
};

export default connectDB;
