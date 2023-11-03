import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/assignment-3");
    console.log("Connected to database");
  } catch (error) {
    console.error("Fail to connect database", error);
  }
};

export default connectDB;

