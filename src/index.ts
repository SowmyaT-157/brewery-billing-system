
import { productList,Display } from "./avai-product-data/data";
console.log("brewery billing system..")
console.log("Displaying product list:\n");

productList.forEach(product => {
  Display(product); 
});