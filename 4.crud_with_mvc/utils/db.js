import mongoose from "mongoose";

// function for mongodb connection
export async function ConnectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://ah55677435_db_user:V9AY63t4DyaG1sO3@cluster0.w6eepcz.mongodb.net/"
    );
    console.log("connection connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
