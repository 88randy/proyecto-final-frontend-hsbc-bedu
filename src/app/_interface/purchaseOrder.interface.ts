import { Customer } from "./customer.interface";
import { Product } from "./product.interface";

export interface PurchaseOrder{
    id: number;
    date: Date;
    customer: Customer;
    items: {
        product: Product, 
        quantity:number
    }[]
}