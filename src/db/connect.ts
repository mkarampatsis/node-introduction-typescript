import mongoose from "mongoose";

require("dotenv").config();

export const connectToDB = mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => { 
      console.log("Database connection has been established successfully.");
    },
    err => { console.log('Failed to connect to MongoDB', err) }
  );