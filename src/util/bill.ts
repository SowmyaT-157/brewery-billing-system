
import { productcategory } from "../enums/enum";
import { OrderItem } from "../interface/interface"
import promptSync from "prompt-sync";
const prompt = promptSync();


export function Bill(cart: OrderItem[]): void {
let total = 0;
console.log("\nYour Bill..");
cart.forEach(item => {
  const amount = item.product.price * item.quantity;
  total += amount;
  console.log(`\nProduct Name: ${item.product.name}`);
  console.log(`Quantity: ${item.quantity}`);
  console.log(`Product Price: ₹${item.product.price}`);

  if (item.product.Category === productcategory.Beverages) {
    console.log(`Cup Size: ${item.cupSize}`);
  }
  console.log(`Total amount: ₹${amount}`);
})
}