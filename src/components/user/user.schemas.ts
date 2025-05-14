import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const validateEmail = (email: string) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

let addressSchema = new Schema({
  area: { type: String },
  road: { type: String }
}, { _id : false });

let phoneSchema = new Schema({
  type: { type: String },
  number: { type: String }
}, { _id : false });

let productSchema = new Schema({
  product: { type: String },
  cost: { type: Number },
  quantity: { type: Number, required: true },
  date: { type: Date,  default: Date.now },
});

let userSchema = new Schema({
  username: {
    type: String, 
    required: [ true, 'Username is required field' ], 
    max: 100, 
    unique:true,
    trim:true,
    lowercase:true, 
  },
  password: {type: String, required: [true, 'Password is required field'], max: 100},
  firstname: {type: String, required: [ true, 'Name is required field' ], max: 100},
  lastname: {type: String, required: [ true, 'Surname is required field' ], max: 100},
  email: {
    type: String, 
    required: [true, 'Email is required field'], 
    max: 100, 
    unique:true,
    trim:true,
    lowercase:true, 
    // validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email address is not valid",
    ],
  },
  address: addressSchema,
  phone: { type:[phoneSchema], null: true },
  roles:{type: [], ref: 'Role', null:true},
  products: { type: [productSchema], null: true  }
},
{ 
  collection: 'users',
  timestamps: true 
});

// Export the model
export const UserModel = mongoose.model('User', userSchema);