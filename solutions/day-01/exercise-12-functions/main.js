// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs 
// using prompt(). One of the input is the number of characters and the second input is the number of ids
//  which are supposed to be generated.

    // ;(function userIdGeneratedByUser() {

    //     let numberOfIds = prompt(" Enter the number of ids: ");
    //     let characterLength = prompt(" Enter the number of characters: ");
        
    //     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let x = 0; x <= numberOfIds - 1; x++) {
    //         let id = "";
    //         for (let z = 0; z < characterLength; z++) {
    //             id += characters.charAt(Math.floor(Math.random() * characters.length));
    //         }
    //         console.log("id: " + id)
    //     }
    // })(3)


// Write a function generateColors which can generate any number of hexa or rgb colors.

    ;(function generateColors(kind, number) {
        let colors = [];
        for (let i = 0; i < number; i++) {
            if (kind === "hexa") {
                colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
            } else if (kind === "rgb") {
                colors.push("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
            }
        }
        console.log(colors);
    })("hexa", 10);

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

    // ;(function shuffleArray(array) {
    //     let shuffledArray = [];
    //     for (let i = 0; i < array.length; i++) {
    //         let randomIndex = Math.floor(Math.random() * array.length); 
    //         shuffledArray.push(array[randomIndex]); 
    //         array.slice(randomIndex, 1); // github copilot recomendaba el uso de splice
    //     }
    //     console.log(shuffledArray);
    // })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Call your function factorial, it takes a whole number as a parameter and it return a factorial
// of the number

    ;(function factorial(number) {
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }
        console.log("factorial => " + factorial);
    })(5);

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

    ;(function isEmpty(parameter) {
        if (parameter === "") {
            console.log("parameter is empty. ");
        } else {
            console.log("parameter is not empty. ");
        }
    })("Ex");


// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

    ;(function average(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === "number") {
                sum += array[i];
            } else {
                console.log("The array items are not numbers. ");
            }
        }
        console.log("average => " + sum / array.length);
    })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// end of exercise 