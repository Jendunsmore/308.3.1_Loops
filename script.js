// Part 1: Fizz Buzz

/*
For each of the activities, decide whether it is best
to use for, for of, or while loops to implement the solution.

To begin, solve the following classic “Fizz Buzz” problem. There are a few different
ways to do this - experiment with what you think is the most efficient.
Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.

- Needs to run 100 times. Use for loop.
- Divisible by 3: / %  "Fizz"
- Divisible by 5:  /  %  "Buzz"
- Div. by 3 & 5  "Fizz Buzz"
- None true, console.log number
<=  i++ i=1
*/

/* for (let i = 1; i <= 100; i++) {  /* for loop, variable i = 1, 1 is less than/ equal to 100,
    1 (i) will increase by 1 each loop
    console.log(i); */

// while loop instead...
let i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}


// Part 2: Prime Time





// Part 3: Feeling Loopy
