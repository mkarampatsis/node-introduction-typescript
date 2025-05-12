import express from 'express';
import { connectToDB } from './db/connect';

const PORT = 3000;

const app = express();

// Σύνδεση με τη βάση δεδομένων και εκκίνηση του server
// app.listen(port, () => {
//   connectToDB;
//   console.log(`Server is running on http://localhost:${PORT}`);
 
// });

// Σύνδεση με τη βάση δεδομένων και εκκίνηση του server
(async () => {
  try {
    // Έλεγχος σύνδεσης με τη βάση δεδομένων
    await connectToDB;

    // Εκκίνηση του server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();