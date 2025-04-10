import mongoose from "mongoose";

// MongoDB se connect karne ka function
const connectDB = async () => {
  try {
    // Connection establish karna
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DB Failed to connect", error);
    process.exit(1);
  }
};

export default connectDB;
