// The FizzBuzz problem.
// Print all numbers between the range 1 and 100 - except for 3 and 5 and their multiples.
// If 3 or its multiples, print Fizz
// if 5 or its multiples, print Fizz
// If multiple of 3 and 5, print FizzBuzz A 

for (var i = 1; i <=100; i++){
    
    // make an if statement with an and operand that measures whether i is a number that is divisible by both 3 and 5 
    if (i % 3 ==0 && i % 5 == 0){
        console.log("FizzBuzz")
    }

    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        console.log("Buzz")
    }

    else{
        console.log(i)
    }
}