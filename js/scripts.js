// Business
function Order () {
  this.pizzas = {};
  this.currentId = 0;
  this.balance = parseInt(balance);
}

Order.prototype.addPIzza = fucntion (pizza) {
  pizza.id = this.assighnId();
  this.pizza[pizza.id] = pizza;
}

Order.prototype.addPizza = function(pizza) {
  this.currentID += 1;
  return this.currentId
}

function Pizza (pizzaToppings, size) {
this.toppings = pizzaToppings;
this.size = size
}