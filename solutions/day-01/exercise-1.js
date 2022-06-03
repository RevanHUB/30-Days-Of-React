// Declare an empty array;
var ex1 = new Array();
console.log(ex1)
// Declare an array with more than 5 number of elements
var ex1 = new Array(6);
console.log(ex1)
// Find the length of your array
console.log(ex1.length)
var ex1 = new Array('1', '2', '3');
console.log(ex1)
// Get the first item, the middle item and the last item of the array
console.log("inicial " + ex1[0]);
var middleItem = ex1[Math.floor(ex1.length / 2)];
console.log("medio " + middleItem)
console.log("final " + ex1[ex1.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and
//  find the length of the array. 
// The array size should be greater than 5
var mixedDataTypes = [
    'string', 
    'integer',
    'float',
    'character',
    'boolean',
    'array',
    'date',
    'time'
];
console.log(mixedDataTypes.length);

// extendido 
var zombi = [{
    'title': 'Zombie',
    'damage': 1,
    'rating': 1.1,
    'isAlive': true
}];
console.log(zombi[0])
zombi.isAlive = true;
console.log(zombi[0].isAlive);
zombi.isAlive = false;
console.log(zombi.isAlive);
zombi.forEach(element => {
    console.log(element);
});
// Declare an array variable name itCompanies and assign initial values Facebook, 
// Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log("primera " + itCompanies[0]);
console.log("medio " + itCompanies[Math.floor(itCompanies.length / 2)])
console.log("ultima " + itCompanies[itCompanies.length - 1])
// Print out each company
itCompanies.forEach(element => {
    console.log("compañía " + element);
});
// Change each company name to uppercase one by one and print them out

// forma fácil 
newArray = [];
itCompanies.forEach(element => {
    console.log("compañía " + element.toUpperCase());
    newArray.push(element.toUpperCase());
});
console.log(newArray);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(newArray.toString())
// Check if a certain company exists in the itCompanies array. If it exist return the 
// company else return a company is not found

function companyExists(company) 
{ 
    if(itCompanies.includes(company)) 
    {
        console.log(company + " exists. ")
    }
    else 
    { 
        console.log(company + " does not exist. ")
    }
}
companyExists('Amazon');
companyExists('Aliexpress');
// Filter out companies which have more than one 'o' without the filter method
//fácil
function filterMe() {return itCompanies.filter(element => element.includes('o'));}
    var twoO = [];
    counter = 0;
    itCompanies.forEach(element => {
        var splited = element.split('');
        console.log(splited);
        if(splited.includes('o')) {
            splited.forEach(letter => {
                if (letter.includes('o')) {
                    counter++;
                } 
            })
            console.log(counter)
            if(counter >= 2) {
                twoO.push(element);
                counter = 0;
            } else {
                counter = 0; 
            }
        } 
    });
console.log("hecha por mi y funciona perfect >< "  + twoO)
console.log("rapida por GitHub" + filterMe())
// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies)
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))
// Slice out the middle IT company or companies from the array
var mitad = Math.floor(itCompanies.length / 2);
console.log("slice mitad "  + itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length - mitad)))
// Remove the first IT company from the array
firstRem = itCompanies.splice(0, 1);
console.log("removido " + firstRem);
// Remove the middle IT company or companies from the array
middleRem = itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(" como se ha borrado el anterior se muestra la que no es, pero si comentas el anterior, aparece Google -> " + middleRem)
// Remove the last IT company from the array
lastRem = itCompanies.splice(itCompanies.length - 1, 1);
console.log(lastRem)
//
// Remove all IT companies
allRem = itCompanies.splice(0);
console.log(itCompanies);