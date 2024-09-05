import {User, Product} from "./models";
import {connectToDB} from "./utils";
export const fetchUsers = async () => {
  try {
    connectToDB();
    const user = await User.find();

    console.log("User", user);
    return user;
  } catch (err) {
    console.log("error", err);
    throw new Error("Failed fetch Users");
  }
};
export const fetchProducts = async () => {
  try {
    connectToDB();
    const product = await Product.find();

    console.log("product", product);
    return product;
  } catch (err) {
    console.log("error", err);
    throw new Error("Failed fetch Users");
  }
};
