Describe order();
-It should create an order constructor with an empty object for pizza and order balance set to zero
code:
- function order ()
  this.pizza = {};
  this.balance = parseInt(balance);
  this.currentId = 0;

Expected Output:
- Undefined

Describe Pizza(); 
- It should creat a cosntructor function for the Pizza object type. 
code: 
- pizza ()
  this.toppings = pizzaToppings;
  this.size = pizzaSize
expected output: 
-> let pizza1 = new Pizza ("[cheese, peperoni]", "Small")
-Pizza; {toppings: Array(2), "Small}

Describe: It should add a pizza to the order
Order.prototype.addPizza = function (pizza) {

}