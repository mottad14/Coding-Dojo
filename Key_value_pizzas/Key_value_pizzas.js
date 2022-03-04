console.log("Hello!")

function pizzaOven(crust, sauce, cheeses, toppings){
    var Pizza = {};
    Pizza.crustType = crust;
    Pizza.sauceType = sauce;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    console.log("Here is your Pizza!", Pizza)
    return Pizza
}

function randomPizzaGenerator(number_cheeses, number_toppings){
    var crustTypes = ["deep dish", "hand tossed","stuffed","thin"];
    var sauceType = ["traditional", "marinara", "barbecue", "ranch"]
    var cheeseTypes = ["mozzarella", "feta", "gouda", "cheddar", "parmesan"]
    var toppingTypes = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "cherry tomatoes", "beef", "pineapple"]
    
    var randomCrust = crustTypes[Math.floor(Math.random()*crustTypes.length)]
    var randomSauce = sauceType[Math.floor(Math.random()*sauceType.length)]
    var randomCheese = [ ]
    var randomTopping = [ ]

    // while loop for cheeses and toppings

    while (randomCheese.length < number_cheeses){
        randomCheese.push(cheeseTypes[Math.floor(Math.random()*cheeseTypes.length)])
        while (randomCheese[0] == randomCheese[1]){
            randomCheese[1] = cheeseTypes[Math.floor(Math.random()*cheeseTypes.length)]
        }
    }

    while (randomTopping.length < number_toppings){
        randomTopping.push(toppingTypes[Math.floor(Math.random()*toppingTypes.length)])
        while (randomTopping[0] == randomTopping[1]){
            randomTopping[1] = toppingTypes[Math.floor(Math.random()*cheeseTypes.length)]
        }
    }
    return (pizzaOven(randomCrust, randomSauce, randomCheese, randomTopping))

}

// Generate a random pizza with randomPizzaGenerator (first input is the number 
//     of cheeses (up to 2), second input is number of toppings(up to 2))
randomPizzaGenerator(1,1)
randomPizzaGenerator(2,2)

