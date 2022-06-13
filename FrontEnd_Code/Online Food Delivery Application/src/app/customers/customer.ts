import { Address } from "../address";

export class Customer {
    customerId!: number;
    firstName!: string;
    lastName!: string;
    gender!: string;
    age!: number;
    mobileNumber!: string;
    email!: string;
    address!:Address;
}
