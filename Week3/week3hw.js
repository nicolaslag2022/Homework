
//1
let pizzaToppings = ["pepperoni", "sausage", "ham", "pineapple"];

//2
function greetCustomer () {
  console.log("Welcome to pizza house");
  for (topping of pizzaToppings) {
    console.log(`${topping});
  }
};
greetCustomer();

//3

function getPizzaOrder (size, crust, ...toppings) {
  let orderUp = `One ${size} ${crust} crust pizza with ${toppings} coming up! `;
  for (let topping of toppings) {
    orderUp += `${topping}`;
  }
};

//4

function preparePizza ([size, crust, ....restToppings]) {
  console.log("Now cooking pizza")
  return {
    size: size,
    crust: crust,
    toppings: toppings
  }
};

preparePizza(getPizzaOrder("large", "thin", "pepperoni");

//5

function servePizza(cookingPizza) {
  console.log(`Order up! one ${pizza.size} ${pizza.crust} curst pizza with ${pizzatoppings}!`);
  return cookingPizza;
};

greetCustomer();

servePizza(preparePizza)(getPizzaOrder("large", "thin crust", "pepperoni", "sausage", "ham", "pineapple")));



