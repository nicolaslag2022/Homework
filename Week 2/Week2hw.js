let pizzaPlace = "Pizza House";
let numberOfToppings = 11;
console.log(pizzaPlace, numberOfToppings);

console.log(`"Welcome to ${pizzaPlace} we have ${numberOfToppings} toppings!"`);

if (numberOfToppings > 11){
  console.log("A whole lot of pizza!")
} else (numberOfToppings <10){
  console.log("Quality, over quantity!")
}

for (let i=2; i <=10; i+=2) {
  console.log('count', i)
}
