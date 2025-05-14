import express from 'express';
import { connectToDatabase } from './db/connect';

const PORT = 3000;

const app = express();

// Σύνδεση με τη βάση δεδομένων και εκκίνηση του server
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
      console.error("Database connection failed", error);
      process.exit();
  });
