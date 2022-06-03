// The following is an array of 10 students ages:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
    console.log(ages);

// - Sort the array and find the min and max age 

    ages.sort();
    console.log(ages);
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    console.log(minAge);
    console.log(maxAge);

// - Find the median age(one middle item or two middle items divided by two) 

    const medianAge = ages[Math.floor((ages.length - 1) / 2)];
    console.log(medianAge);

// - Find the average age(all items divided by number of items) 
    const averageAge = ages.reduce((acc, curr) => acc + curr) / ages.length;
    console.log(averageAge);

    const acumulative = ages.reduce((acc, curr) => acc + curr);
    const myAverageAge = acumulative / ages.length;
    console.log(myAverageAge);

// - Find the range of the ages(max minus min) 

    const range = minAge + "-" + maxAge;    
    console.log(range);

// - Compare the value of (min - average) and (max - average), use abs() method

    const minAverage = Math.abs(minAge - averageAge);
    const maxAverage = Math.abs(maxAge - averageAge);
    console.log(minAverage);
    console.log(maxAverage);

// 1.Slice the first ten countries from the countries array

    import countries from "./countries.js";
    console.log(countries);
    const firstTenCountries = countries.slice(0, 10);
    console.log(firstTenCountries);

// Find the middle country(ies) in the countries array

    const middleCountry = countries[Math.floor((countries.length -1) / 2)]
    console.log(middleCountry);

// Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half
// caso impar

    console.log("caso impar")
    if(countries.length % 2 === 0){
        const firstHalf = countries.slice(0, countries.length / 2);
        const secondHalf = countries.slice(countries.length / 2, countries.length);
        console.log(firstHalf);
        console.log(secondHalf);
    } else {
        const firstHalf = countries.slice(0, countries.length / 2 + 1);
        const secondHalf = countries.slice(countries.length / 2 + 1, countries.length);
        console.log(firstHalf);
        console.log(secondHalf);
    }
    console.log("caso par");
    if (firstTenCountries.length % 2 === 0) {
        const firstHalf = firstTenCountries.slice(0, firstTenCountries.length / 2);
        const secondHalf = firstTenCountries.slice(firstTenCountries.length / 2, firstTenCountries.length);
        console.log(firstHalf);
        console.log(secondHalf)
    }     

// End of exercise. 