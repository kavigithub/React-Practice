//to run mjs file : run this command
// node  --experimental-modules  module-pattern2.mjs

import ShoppingCart from "./module_pattern1.mjs";

//create instance
let shopping = new ShoppingCart();
shopping.addItems('cooker');
shopping.addItems('Plant');

console.log(shopping.getShoppingList());