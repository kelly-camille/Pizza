# Pizza

#### By Kelly Bruce

#### Determines price of pizza based on user selection

## Technologies Used

* HTML
* JavaScript

## Description

This application allows the user to select the type and size of the pizza they would like to order and generates a price for them

## Setup/Installation Requirements

* Clone using the repo link: 
* Open file naemd Pizza
* Open index.html in browser

## Known Bugs

* No known bugs at this time

## License

MIT

Copyright (c) 8/28/22 Kelly Bruce

### Testing


## Test1
### describe:
  * function Order () 
### test:
* it should make a constructor function 
* make order constructor function 
* to include a list of pizza objects (to store pizza entries)
* set the current id to zero
### Code:
this.pizzas = {};
this.currentId = 0;
this.balance = parseInt(balance);
### output: 
 * undefined 
---------------------------------------------------------------------
## Test2  
### describe:
Pizza (pizzaToppings, size, price)
### test:
* it should make pizza constructor that includes pizzaToppings and Size properties
Code:
### Code:
this.toppings = pizzaToppings;
this.size = size
this.price = price
### output: 
* let pizza1 = new Pizza (["cheese", "saussage"], "small", "10");
--------------------------------------------------------------------
## Test3  
### describe:
* assignId = function() 
### test: 
* it should assign an ID to each pizza
### Code:
Order.prototype.assignId = fucntion() {
  this.currentId += 1;
  return this.currentId;
### output:
* pizza 1, pizza 2, pizza 3 etc...

---------------------------------------------------------------------
## Test4  
### describe:
* addPizza = function(pizza)
### test:
* it should make a prototype method to add a nn6ew pizza to the order
### Code:
Order.prototype.addPizza = function(pizza) {
  this.pizzas[pizzas.id] = pizza
### output:
* this.pizzas = {pizza1, pizza2} etc... (includes details with toppings size and price)
-------------------------------------------------------------------
## Test5
### describe:
* Order.prototype.findPizza = function(id)
### test:
* it should make a prototype to find the pizza id
### Code:
  if (this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false;
};
### output:
* Id:1, id:2 etc...
-------------------------------------------------------------------
## Test6
### describe:
* Pizza.prototype.calculate
### test:
* It should calculate price of pizza based on user selection
### Code:
if (this.size === "small") {
  this.price = 10;
  } else if (this.size === "large") {
  this.price = 15;
  }
### output:
- 10 || 15
 