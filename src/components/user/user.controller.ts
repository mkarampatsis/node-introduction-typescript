import { Request, Response } from 'express';
import { find, findOne } from './user.services';
import { IUser } from './user.interface';

export const getAllUsers = async (req:Request, res:Response) => {
  console.log("Get all users");

  try {
    const result = await find();
    console.log('Success in reading all users');
    res.status(200).json({ status: true, data: result });
    
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log(`Problem in reading users: ${err}`)
  }
};

export const getUserByEmail = async (req:Request, res:Response) => {
  
  const email = req.params.email;
  console.log("Find user with email", email);

  try {
    const result = await findOne(email);

    if (result) {
      console.info(`Success in finding user: ${email}`);
      res.status(200).json({ status: true, msg: "Success in finding user" });      
    } else {
      console.info(`User not found: ${email}`);
      res.status(404).json({ status: true, msg: "User not found" });
    }
  } catch (err) {
    console.error(`Problem in finding user: ${email}`);
    res.status(400).json({ status: false, msg: `Problem in finding user: ${err}` });    
  }
};

// exports.create = async (req, res) => {
  
//   saltOrRounds = 10;
//   // Hash the password
//   let hashedPassword = "";
//   // if (data.password)
//   if (req.body.password)
//     hashedPassword = await bcrypt.hash(req.body.password, saltOrRounds)

//   const newUser = new User ({
//     username: req.body.username,
//     password: hashedPassword,
//     name: req.body.name,
//     surname: req.body.surname,
//     email: req.body.email,
//     // Change for Crud app
//     // address: {
//     //   area: req.body.area,
//     //   road: req.body.road
//     // },
//     address: req.body.address,
//     // Added later when building crud frontend
//     phone: req.body.phone
//   });

//   console.log("insert user with username:", req.body.username);
//   console.log("insert user with username:", req.body);
//   // console.log("hashedPassword:", hashedPassword);

//   try {
    
//     const result = await newUser.save();
//     res.status(200).json({ status: true, data: result });
//     console.info(`Success in saving user: ${req.body.username}`);

//   } catch (err) {
//     if (err.hasOwnProperty("errmsg")){
//       res.status(400).json({ status: false, data: err.errorResponse.errmsg });
//     } else {
//       res.status(400).json({ status: false, data: err.message });
//     }
//     console.error(`Problem in saving user: ${req.body.username}`);
//   }
// };

// exports.update = async (req, res) => {

//   const username = req.params.username;

//   console.log("Update user with username:", username);

//   const updatedUser = {
//     name: req.body.name,
//     surname: req.body.surname,
//     email: req.body.email,
//     address: {
//       area: req.body.address.area,
//       road: req.body.address.road
//     },
//   };

//   try {
//     const result = await  User.findOneAndUpdate({ username: username }, updatedUser, { new: true });
//     res.status(200).json({ status: true, data: result });
//     console.info(`Success in updating user: ${ username }`);
//   } catch (err) {
//     res.status(400).json({ status: false, data: err });
//     console.error(`Problem in updating user: ${ username }`);
//   }
// };

// exports.delete = async (req, res) => {

//   const username = req.params.username;

//   console.log("Delete user with username", username);

//   try {
//     const result = await User.findOneAndDelete({ username: username });
//     res.status(200).json({ status: true, data: result });
//     console.info(`Success in deleting user: ${username}`);
//   } catch (err) {
//     res.status(400).json({ status: false, data: err });
//     console.error(`Problem in deleting user: ${username}`, err);
//   }
// };

// exports.checkDuplicateEmail = async(req, res) => {
//   const email = req.params.email;

//   console.log("Check for duplicate email address", email);
//   try {
//     const result = await User.findOne({ email: email });
//     if (result) {
//       res.status(400).json({ status: false, data: result });
//     } else {
//       res.status(200).json({ status: true, data: result });
//     }
//   } catch (err) {
//     res.status(400).json({ status: false, data: err });
//     console.error(`Problem in finding email address: ${email}`, err);
//   }
// }

// // Theory 
// res.status() can then send and json or something else
// res.status(404).send('Not found');
// res.status(200).json({ message: 'OK' });

// res.sendStatus() Sets the status code and immediately ends
