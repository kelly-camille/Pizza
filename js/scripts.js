// Business
function Order () {
  this.pizzas = {};
  this.currentId = 0;
  this.balance = parseInt(balance);
}

Order.prototype.addPIzza = fucntion (pizza) {
  pizza.id = this.assighnId();
  this.pizza[pizza.id] = pizza;
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}

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