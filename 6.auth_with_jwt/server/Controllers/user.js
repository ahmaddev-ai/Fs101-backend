import { hashPassword } from "../Utils/bcrypt";
import User from "../Models/user.js";
export const loginUser = async (req, res) => {};

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const encryptedPassword = await hashPassword(password);
    const newUser = new User({
      username: username,
      password: encryptedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
