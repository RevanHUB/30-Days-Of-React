// Declare a function fullName and it takes firstName, lastName as a parameter and it returns
// your full - name.

    ;(function fullName(firstName, lastName) {
        let fullName = firstName + ' ' + lastName;
        console.log(fullName);
        return fullName;
    })('David', 'Walsh')


// Declare a function addNumbers and it takes two two parameters and it returns sum.

    ;(function addNumbers(num1, num2) {
        let sum = num1 + num2;
        console.log(sum)
        return sum;
    })(4, 2);

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

    ;(function areaOfCircle(radius) {
        let area = 3.14 * radius * radius;
        console.log(area);
        return area; })(5);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

    ;(function convertCelciusToFahrenheit(celcius) {
        let farhenheitTemp = (celcius * 9/5) + 32;
        console.log(farhenheitTemp);
        return farhenheitTemp;
    })(10);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults
//  20 years old or older.Check if a person is underweight, normal, overweight or obese based the
// information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

    ;(function bmi(weight, height) {
        let bmi = (weight) / (height * height);
        console.log("your bmi is: " + bmi);
        if(bmi >= 18.5 && bmi <= 24.9) {
            console.log("you're underweight"
            );
        }
        if (bmi >= 25 && bmi <= 29.9) {
            console.log("you're overweight");
        }
        if (bmi >= 30) {
            console.log("you're in obese state");
        }
        return bmi;
    })(76, 1.76);

// Write a function called checkSeason, it takes a month parameter and returns the season:
// Autumn, Winter, Spring or Summer.
// Use the following criteria to determine the season:
// December, January, February: Autumn
// March, April, May: Spring
// June, July, August: Summer
// September, October, November: Winter

let month = "JUNE";
let arrayedMonth = month.split('');
console.log(arrayedMonth);
const filtered = function filterMonth(arrayedMonth) 
 { 
    console.log(arrayedMonth[0].toUpperCase() + arrayedMonth.slice(0, 1).toLowerCase());
    return arrayedMonth[0].toUpperCase() + arrayedMonth.slice(1).toLowerCase();
 }
 console.log(filtered("NOVEMBER"))

    ;(function checkSeason(month) {
        if(month === 'December' || month === 'January' || month === 'February') {
            console.log("it's autumn");
            var season = "summer";
            return season;
        }
        if(month === 'March' || month === 'April' || month === 'May') {
            console.log("it's spring");
            var season = "summer";
            return season;
        }
        if(month === 'June' || month === 'July' || month === 'August') {
            console.log("it's summer");
            var season = "summer";
            return season;
        }
        if(month === 'September' || month === 'October' || month === 'November') {
            console.log("it's winter");
            var season = "summer";
            return season;
        }
    })('June');
 

// end of exercise