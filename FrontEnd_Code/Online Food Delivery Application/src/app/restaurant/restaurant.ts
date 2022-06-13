import { Address } from "../address";
import { Item } from "../item/item";

export class Restaurant {
    restaurantId!:number;
    restaurantName!:string;
    address!:Address;
    itemList!:Item[];
    managerName!:string;
    contactNumber!:number;
}
