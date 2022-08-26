// Business
function Order () {
  this.pizzas = {};
  this.currentId = 0;
  this.balance =
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.findPizza = function(id) {
  if (this.pizza[id] !== undefined) {
    return this.pizza[id];
  }
  return false;
};

function Pizza (pizzaToppings, size, price) {
  this.toppings = pizzaToppings;
  this.size = size
  this.price = price
}

Pizza.prototype.addCost = function () {
  this.balance += this.price;
  return this.balance;
}
