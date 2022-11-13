
//1
let pizzaToppings = ["pepperoni", "sausage", "ham", "pineapple"];

//2
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

//4
function preparePizza ([size, crust, toppings]){
  let pizza = {
    size: "Large",
    crust: "Thin",
    toppings: "Pineapple",
  }
  console.log("Cooking...")
return pizza;
};
preparePizza("large", "thin", "pepperoni");

//5
function servePizza(pizza); {
  console.log("Order up! Here's your large thick crust pizza with ${pizza.size} ${pizza.crust ${pizza.toppings}");
  return pizza;
};

servePizza(preparePizza)(getPizzaOrder("large", "thin crust", "pepperoni", "sausage", "ham", "pineapple"));






function pizzaToppings(ham, sausage) {
  console.log(ham);
  console.log(sausage)
}
pizzaToppings()

