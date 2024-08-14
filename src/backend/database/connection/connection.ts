import mongoose from "mongoose";

const connectDB = async () => {
  const db = await mongoose
    .connect("mongodb://127.0.0.1:27017/travelco")
    .catch(() => console.log("there is problem in connection..."));
  console.log("connected to DB successfully");
  // console.log(mongoose.connection);
  return mongoose.connection;
};

const disconnectDB = async () => {
  const db = await mongoose.connection.close();
  console.log("disconnect from database");
};
export { connectDB, disconnectDB };
