import  products  from './products.js';

console.log(products);

// Print the price of each product using forEach

// var price = products.forEach();
products.forEach(element => {
    console.log(element.price)
}); 
// console.log(price);

// Print the product items as follows using forEach

// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros. 
// The price of coffee is 10 euros.
// The price of tea is unknown.

    products.forEach(element => {
        element.price === ' ' || element.price === null || element.price === '' ? console.log("The price of " + element.product + " is unknown.") : console.log("The price of " + element.product + " is " + element.price + " euros.")
    });

// Calculate the sum of all the prices using forEach

    let acc = 0;
    const calc = products.forEach((element, index) => {  
        if (element.price === " " || element.price === null || element.price === '') {
        } else {
            //acumulate the element.price in a variable
            acc += element.price;
            console.log(acc);
        }
        return acc;
    })

    console.log(calc)

// Create an array of prices using map and store it in a variable prices

    var prices = products.map((each) => {
        console.log(each.price)
        return each.price;
    });

    console.log(prices)

// Filter products with prices

    const filteredProd = products.filter((filtered) => {
        return (filtered.price === '' || filtered.price === " " || filtered.price === null) ? null : filtered.price;
    })
    console.log(filteredProd)

// Use method chaining to get the sum of the prices(map, filter, reduce)

    

    let listProducts = products
    .filter((filtered) => filtered.price === '' || filtered.price === " " || filtered.price === null ?
    null : filtered.price)
    .map((each) => each.price)
    .reduce((acc, curr) => acc + curr);
    console.log(listProducts)

// Calculate the sum of all the prices using reduce only
    let sum = products.map((each) => {
        return each;
    }).reduce((acc, curr) => 
    {
        if (curr.price === '' || curr.price === " " || curr.price === null) {} else {
            acc = acc + curr.price
        }
        return acc;
    });
    console.log(sum) // no sirve

// Find the first product which doesn't have a price value

    let firstEmptyProduct = products.find((product) => product.price === '' || product.price === " " || product.price === null ? product : null);
    console.log(firstEmptyProduct)

// Find the index of the first product which does not have price value

    let firstEmptyProductIndex = products.findIndex((product) => product.price === '' || product.price === " " || product.price === null ? product : null);
    console.log(firstEmptyProductIndex)

// Check if some products do not have a price value

    let checkSome = products.some((product) => product.price === '' || product.price === " " || product.price === null ? true : false);
    console.log(checkSome) // no hace falta el true o false, pero lo puse para que fuera más gráfico a la hora de devolverlo

// Check if all the products have price value

    let checkThemAll = products.every((product) => product.price === '' || product.price === " " || product.price === null ? true : false)
    console.log(checkThemAll)

// Explain the difference between forEach, map, filter and reduce

    console.log("Foreach es un método que partiendo de un array, lo recorre para realizar algo con su contenido, devolviendo el valor de este.\nMap partes de un array y en la variable que tu guardas lo que te retorna es un nuevo array.\nFilter es un método de filtrado de un array, que te devuelve un array con los elementos que cumplen con la condición.\nReduce es un método que parte de un array y lo recorre para realizar una acción con su contenido principalmente facilitando tareas de acumulación aritmética y retornando dicho valor.")

// Explain the difference between filter, find and findIndex

    // filtrar es una función que retorna todos los valores que cumplen dicho criterio que le incluyas
    // find es una función que retorna el primer valor que cumpla con el criterio que le incluyas
    // findIndex es una función que retorna el índice del primer valor que cumpla con el criterio que le incluyas

// Explain the difference between some and every

    // some es una función que retorna true o false dependiendo de si alguno de los valores que le incluyas cumplen con el criterio que le incluyas
    // every es una función que retorna true o false devolviendo TRUE SOLO SI el criterio que le suministra se cumple en TODOS los valores 

// end of exercise