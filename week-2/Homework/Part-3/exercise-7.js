/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Patch Wocker",
  price: 19.99,
  stock: 10
};
var product4 = {
  id: 4,
  name: "Poaster Plocker",
  price: 69,
  stock: 69
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};
//3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
//the function will add the product to the selectedProduct list, and add the price to the totalPrice
// add values not the array strings!!!
function addToShoppingCart(id){

  let chosenProduct = products.find((product)=>  product.id == id);
  let shoppingElement = shoppingCart.selectedProducts;
  let priceOfProduct = chosenProduct.price;

  shoppingElement = shoppingElement.push(chosenProduct);
  
  shoppingCart.totalPrice = shoppingCart.totalPrice + priceOfProduct;
  
}
//4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore
function removeFromShoppingCart(id){
  let filteredProducts = shoppingCart.selectedProducts.find((x) => x.id === id);
  let index = shoppingCart.selectedProducts.indexOf(filteredProducts);

  shoppingCart.selectedProducts.splice(index, 1); 
}
/*5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products */
function shop(){
  //let cartProducts = products.find((product)=>  product.id);
  //console.log(shoppingCart.selectedProducts);
  let boughtElementIds = shoppingCart.selectedProducts.map((product) =>product.id);
  //console.log(boughtElementIds);
  //products.map((product) => console.log(product.stock));
  //let availableStockIds = products.map((x)=>x.id);
  //console.log(availableStockIds);
  
  boughtElementIds.forEach((i) => products[i-1].stock = products[i-1].stock- 1 );
//console.log(products[0].stock); 
//console.log(products[3].stock); 
   
 shoppingCart.selectedProducts = [];
 
  shoppingCart.totalPrice = 0;
}
//products.map((product) => console.log(product.stock));



//console.log(shoppingCart);
//results********************************************************
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));