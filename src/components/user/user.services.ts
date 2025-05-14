import { UserModel } from "./user.schemas";

export function find() {
  const result = UserModel.find();
  return result;
}

export function findOne(email:string) {
  const result = UserModel.findOne({ email: email })
  return result;
}