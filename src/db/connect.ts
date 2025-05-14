import mongoose from "mongoose";
import dotenv from 'dotenv'

export async function connectToDatabase () {
  dotenv.config();

  await mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => { 
      console.log("Database connection has been established successfully.");
    },
    err => { console.log('Failed to connect to MongoDB', err) }
  );
}