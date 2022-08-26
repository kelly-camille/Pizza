Test1
-make order constructor function 
  -to include a list of pizza objects (to store pizza entries)
  -set the current id to zero
  -order balance
  Code:
  function Order () {
  this.pizzas = {};
  this.currentId = 0;
  this.balance = parseInt(balance);
}
---------------------------------------------------------------------
 Test2  
-make pizza constructor that includes pizzaToppings and Size properties
Code:
function Pizza (pizzaToppings, size) {
this.toppings = pizzaToppings;
this.size = size
}
--------------------------------------------------------------------
Test3
-assign an ID to each pizza
Code:
Order.prototype.assignId = fucntion() {
  this.currentId += 1;
  return this.currentId;
}

---------------------------------------------------------------------
Test4
- make a prototype method to add a new pizza to the order
Code:
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizzas.id] = pizza
}
-------------------------------------------------------------------
Test5
- make a prototype method to determin cost of pizza 

