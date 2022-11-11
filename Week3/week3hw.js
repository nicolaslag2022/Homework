

let pizzaToppings = ["pepperoni", "sausage", "ham", "pineapple"];

function greetCustomer () {
  console.log("Welcome to pizza house");
  for (let topping of pizzaToppings) {
    console.log(topping);
  }
}

greetCustomer();

function getPizzaOrder (size, crust, ...Toppings){
  console.log("One large thin crust pizza with pepperoni, ham, and pineapple.")
  let size = [small, medium, large];
  let crust = [thin, thick, original];
  let Toppings = pizzaToppings;
}
console.log("One small thin crust pepperoni pizza coming up");
return console.log([size, crust, Toppings]);

