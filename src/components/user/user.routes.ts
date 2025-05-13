import express from "express";
// import {
//   createUser,
//   getAllUsers,
//   getUserByEmail,
//   updateUser,
//   deleteUser,
// } from "../controllers/classController.js";

const router = express.Router();

// router.post("/", createClass);
// router.get("/", getAllClasses);
// router.get("/:id", getClassById);
// router.put("/:id", updateClass);
// router.delete("/:id", deleteClass);

export default router;

// Theory
// export default router; → Use import router from './file'
// export { router }; → Use import { router } from './file'

// In first case we can use and other names instead of route like
// import banana from './file'
// In second we can't

// In first case we can import only one thing from exported files
// export default router;
// In second we can import multiple exports from file
// export { router, otherThing };

