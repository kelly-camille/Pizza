// Business
function Order () {
  this.pizzas = {};
  this.currentId = 0;
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

function Pizza (pizzaToppings, size) {
this.toppings = pizzaToppings;
this.size = size
}

Pizza.prototype.price = function() {
  
}