
// Business
function Order (price) {
  this.pizzas = {};
  this.currentId = 0;
  this.price = 0;
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
  this.size = size;
  this.price = price;
  return price;
  }



// Ui
function handleSubmission(event) {
  event.preventDefault();
  const toppingChoice =document.querySelector("input[name='topping']:checked").value;
  const sizeChoice = document.querySelector("input[name='size']:checked").value;
  let order = new Order();
  let pizza = new Pizza(toppingChoice, sizeChoice);
  order.addPizza(pizza);
  console.log(pizza);

  console.log(sizeChoice);
  
  if (sizeChoice === "small") {
    price = 10;
    } else if (sizeChoice === "large") {
    price = 15;
    }
      document.getElementById("balance-display").innerHTML = "Your total is $" + price;
  }

window.addEventListener("load", function() {
  const form = document.getElementById("order");
  form.addEventListener("submit", handleSubmission);
})

