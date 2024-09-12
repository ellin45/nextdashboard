import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

const db = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri);
      console.log("MongoDB connected successfully using Mongoose");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
      throw new Error("Failed to connect to MongoDB");
    }
  }
};

export default db;
