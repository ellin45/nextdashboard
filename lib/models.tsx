import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    hashedPassword: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
    },
    orders: {
      type: Number,
    },
    revenue: {
      type: Number,
    },
  },
  {timestamps: true}
);

const productSchema = new mongoose.Schema({
  isAdmin: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  isApproved: {
    type: Boolean,
  },
  email: {
    type: String,
  },
  id: {
    type: String,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
