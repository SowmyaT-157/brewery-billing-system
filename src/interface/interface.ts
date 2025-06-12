import { producttype,productcategory,CupSize } from "../enums/enum";

export interface ProductDetails {
    name : string;
    price:number;
    Type:producttype;
    Category:productcategory;
}
export interface OrderItem {
  product: ProductDetails;
  quantity: number;
  cupSize?: CupSize;
}
