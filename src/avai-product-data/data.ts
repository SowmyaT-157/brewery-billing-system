import { productcategory,producttype } from '../enums/enum';
import { ProductDetails } from '../interface/interface'

export const productList : ProductDetails[] = [
    {name:"ABC juice",price:200,Type :producttype.Vegan,Category:productcategory.Beverages},
    {name:"cupcake",price:160,Type:producttype.Vegan,Category:productcategory.Desserts},
    {name:"fishchips",price:300,Type:producttype.NonVegetarian,Category:productcategory.Snacks},
    {name:"milkshake",price:150,Type:producttype.Vegetarian,Category:productcategory.Beverages},

];
export function Display(product: ProductDetails): void {
//   console.log(`Name: ${product.name}, Type: ${product.Type}, Category: ${product.Category}`);

  console.log(`Name: ${product.name}\n`);
  console.log(`Price: ₹${product.price}\n`);
  console.log(`Type: ${product.Type}\n`);
  console.log(`Category: ${product.Category}\n`);

}