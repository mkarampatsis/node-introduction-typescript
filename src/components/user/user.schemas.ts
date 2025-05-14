import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const validateEmail = (email: string) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

let addressSchema = new Schema({
  street: { type: String },
  city: { type: String },
  zipCode: { type: String },
}, { _id : false });

let phoneSchema = new Schema({
  type: { type: String },
  number: { type: String }
}, { _id : false });

let userSchema = new Schema({
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
  password: {type: String, required: [true, 'Password is required field'], max: 100},
  address: addressSchema,
  phone: { type:[phoneSchema], null: true },
  roles:{type: Schema.Types.ObjectId, ref: 'Role', default:"Reader"},
},
{ 
  collection: 'users',
  timestamps: true 
});

// Export the model
export const UserModel = mongoose.model('User', userSchema);