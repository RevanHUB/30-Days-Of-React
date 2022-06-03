// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

    import countries from './countries.js';
    import webtechs from './webtechs.js';
    console.log(countries);
    console.log(webtechs);

// First remove all the punctuations and change the string to array and count the number 
// of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
    let words = new Array();
    words = text.replace(/[^\w\s]/gi, '').split(' ');
    console.log(words);
    console.log(words.length)

// In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
    console.log(shoppingCart)

// add 'Meat' in the beginning of your shopping cart if it has not been already added

    shoppingCart.unshift('Meat');
    console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added

    shoppingCart.push('Sugar');
    console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey

    shoppingCart.splice(4, 1);
    console.log(shoppingCart);

// modify Tea to 'Green Tea'

    if(shoppingCart.includes('Tea')) {
        var position = shoppingCart.indexOf('Tea');
        shoppingCart[position] = 'Green Tea';
    }
    console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//  If it does not exist add to the countries list.

    if(countries.includes('Ethiopia')) {
        var position = countries.indexOf('Ethiopia');
        var countryUpper = countries[position].toUpperCase();
        console.log(countryUpper);
    } else {
        countries.push('Ethiopia');
        console.log(countries);
    }

// In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    if(webtechs.includes('Sass')) 
    {
        console.log("Sass is a CSS preprocess");
    } 
    else
    { 
        webtechs.push('Sass');
        console.log(webtechs);
    }

// Concatenate the following two variables and store it in a fullStack variable.
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
    const backEnd = ['Node', 'Express', 'MongoDB'];
    const fullStack = frontEnd.concat(backEnd);
    console.log(fullStack)

// End of the exercise. Congratz!! You have completed the exercise.


