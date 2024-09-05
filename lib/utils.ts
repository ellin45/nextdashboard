import mongoose from "mongoose";

interface Connection {
  isConnected: boolean;
}

const connection = {};
export const connectToDB = async (): Promise<void> => {
  try {
    if ((connection as Connection).isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    (connection as Connection).isConnected = db.connection.readyState === 1;
    console.log("Connected to MongoDB:", db.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log("error", error);
    throw new Error();
  }
};

import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
