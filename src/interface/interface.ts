import { producttype,productcategory } from "../enums/enum";

export interface ProductDetails {
    name : string;
    price:number;
    Type:producttype;
    Category:productcategory;
}