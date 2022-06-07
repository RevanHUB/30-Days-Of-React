// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value 
// or values of a quadratic equation, solveQuadEquation.

    ;(function solveQuadEquation(a, b, c) {
        let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        console.log("x1 is: " + x1);
        console.log("x2 is: " + x2);
        return x1, x2;
    })(1, -6, 5);

// Declare a function name printArray. It takes array as a parameter and it prints out each value 
// of the array.

    ;(function printArray(array) {
        for (const value of array) {
            console.log(value);
        }
    })([1, 2, 3, 4, 5]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date
//  object.

    ;(function showDateTime() {
        let date = new Date();
        console.log(date.toLocaleString());
    }
    )();

// Declare a function name swapValues. This function swaps value of x to y.

    ;(function swapValues(x, y) {
        let temp = x;
        x = y;
        y = temp;
        console.log("x is: " + x);
        console.log("y is: " + y);
    }
    )(1, 2);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse 
// of the array (don't use method).

    ;(function reverseArray(...array) {
        console.log("normal array " + array);
        let reverse = array.reverse();
        console.log("reverse array " + reverse);
    })([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - 
// capitalizedarray.

    ;(function capitalizeArray(...array) {
        let capitalizedArray = [];
        for (const value of array) {
            capitalizedArray.push(value.toUpperCase());
        }
        console.log(capitalizedArray);
    })("hello", "world");


// Declare a function name addItem. It takes an item parameter and it returns an array after adding 
// the item

    ;(function addItem(...item) {
        let array = [];
        array.push(item);
        console.log(array);
    })("test", "hello");

// Declare a function name removeItem. It takes an index parameter and it returns 
// an array after removing an item

    ;(function removeItem(...index) {
        let array = [1, 2, 3, 4, 5];
        array.splice(index , 1);
        console.log(array);
    })(1); // borra la posición 1 


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts
//  number of evens and odds in the number.

    ;(function evensAndOdds(integer) {
        let evens = 0;
        let odds = 0;
        for (let i = 0; i <= integer; i++) {
            if (i % 2 === 0) {
                evens++;
            } else {
                odds++;
            }
        }
        console.log("Evens: " + evens);
        console.log("Odds: " + odds);
    })(100);

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


// Write a function which takes any number of arguments and return the sum of the arguments

    ;(function sum(...args) {
        let sum = 0;
        for (const value of args) {
            sum += value;
        }
        console.log(sum);
    }(1, 2, 3, 4, 5));

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10


// Declare a function name userIdGenerator. When this function is called it generates seven character id.
//  The function return the id.

;(function userIdGenerator() {
    let id = "";
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 7; i++) {
        id += characters.charAt(Math.floor(Math.random() * 10));
    }
    console.log(id);
}
)();


// end of exercise