import { IRole } from "components/roles/roles.interface";

export interface IAddress {
  street: string;
  city: string;
  zipCode: string;
}

export interface IPhone {
  number: string;
  type: string;
}

export interface IUser {
  firstname: string;
  lastname: string
  email: string,
  address: IAddress,
  phone: IPhone[],
  roles: IRole[],
  password: string;
}