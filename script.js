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

/* As a final task, solve the following practical problem regarding string processing.

Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You
may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets.
While each of these programs save their data in different formats to preserve style (e.g., font color or
cell backgrounds), at their core, they are storing CSV data.

CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz
Master,58\n98,Bill,Doctor’s Assistant,26

Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data
should begin on a new line, as follows:

ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26

As you may have guessed, these values being “comma-separated” means that each comma is also a
delimiter. This is why this type of data is traditionally viewed in tables.

Your task is to write a script that accomplishes the following:
Loop through the characters of a given CSV string. _____ (for)
Store each “cell” of data in a variable.  _______  variable (cell), each.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.

You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
You can make the following assumptions:
*There will only be 4 cells per row.

*There will be no escaped characters other than “\n”.
Use the example string provided above to test your program. Once you are confident it is working
correctly, try the following string to see if your program works properly with other data
Index,Mass (kg),Spring 1 (m),Spring 2

(m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,
0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.20
4,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232 */

const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 ="";
let cell2 = "";
let cell3 = "";
