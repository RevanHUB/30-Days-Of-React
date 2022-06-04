    console.log("Objects exercise")
    console.log("-----------------")
// Create an empty object called dog

    let dog = {};

// Print the the dog object on the console
    console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

    dog.name = "Buddy";
    dog.legs = 4;
    dog.color = "brown";
    dog.bark = "woof woof";
    console.log(Object.keys(dog));

// Get name, legs, color, age and bark value from the dog object

   let values = Object.values(dog);
   console.log(values);

// Set new properties the dog object: breed, getDogInfo

    dog.breed = "Labrador";
    dog.getDogInfo = function () {
        //return all properties except getDogInfo, all other properties should be accessible
        let dogInfo = Object.keys(dog).filter(key => key !== "getDogInfo");
        return dogInfo;
    }

    let valuesN = Object.values(dog);
    console.log(valuesN);
    console.log(dog.getDogInfo())