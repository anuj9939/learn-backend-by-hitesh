import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongodb Connected || Host:${connectionInstance.connection.host}`
    );
    return null;
  } catch (error) {
    console.log("Mongodb Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
