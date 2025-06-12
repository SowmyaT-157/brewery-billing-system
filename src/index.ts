import promptSync from "prompt-sync";

import { ProductDetails,OrderItem} from "./interface/interface";
import { productList,Display } from "./avai-product-data/data";
import { producttype,productcategory,CupSize } from "./enums/enum";
const prompt = promptSync()




console.log("brewery billing system..")
console.log("Displaying product list:\n");

productList.forEach(product => {
  Display(product); 
});



function ProductName(name: string): ProductDetails | undefined {
  for (const product of productList) {
    if (product.name.toLowerCase() === name.toLowerCase()) {
      return product;
    }
  }
  return undefined;
}

const cart: OrderItem[] = [];
// let continueToPurchase = true;
while (true) {
  const userinput = prompt("Enter product name : ");
  if (userinput.toLowerCase() === "done") break;

  const product = ProductName(userinput);
  if (!product) {
    console.log("Product not found...!");
    continue;
  }

  const quantity = parseInt(prompt("Enter quantity: "));
  if (isNaN(quantity) || quantity <= 0) {
    console.log("please enter a valid quantity");
    continue;
  }


  let cupSize: CupSize | undefined = undefined;
  if (product.Category === productcategory.Beverages) {
    const cup = prompt("Enter cup size : ");
    if (cup in CupSize) {
      cupSize = cup as CupSize;
    } else {
      cupSize = CupSize.Medium; 
    }
  }
  cart.push({ product, quantity, cupSize });
  console.log(`${product.name} added to cart.`)
}