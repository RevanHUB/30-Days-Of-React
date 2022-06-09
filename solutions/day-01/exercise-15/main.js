// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(type, identifier,  color, age, vacunated) {
        this.type = type,
        this.identifier = identifier,
        this.color = color,
        this.age = age,
        this.vacunated = vacunated
    }
    static getPetName() { return "The pet name is: "+ this.identifier }
    get incrementAge() { return this.age+=1 }
    get getAge() { return "the pet age is " + this.age }
    getInfo() { return this.identifier + " is a pet!"}
    get changeVacunatedState() { return this.vacunated === true ? this.vacunated = false : this.vacunated = true } 
}

const Wolfi = new Animal('dog', 'Wolfi', 'brown', 2, true);

console.log(Wolfi)
console.log(Wolfi.getInfo())
console.log(Wolfi.getPetName);
console.log(Wolfi.incrementAge);
console.log(Wolfi.getAge);
console.log(Wolfi.changeVacunatedState);
console.log(Wolfi)



// Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
    constructor(type, identifier,  color, age, vacunated) {
        super(type, identifier,  color, age, vacunated),
        this.type = 'Dog'
    }
    getInfo() {return this.identifier + " is a dog! "}
}

class Cat extends Animal {
    constructor(type, identifier,  color, age, vacunated) {
        super(type, identifier,  color, age, vacunated),
        this.type = 'Cat'
    }
    getInfo() {return this.identifier + " is a cat! "}
}

const Gigante = new Cat('', 'Gigante', 'yellow', 0.5, false);
const Ronnie = new Dog('', 'Ronnie', 'brown', 0.5, false);
console.log(Gigante)
console.log(Gigante.getInfo())
console.log(Ronnie)
console.log(Ronnie.getInfo())

// we vacunated ronnie so...

Ronnie.changeVacunatedState;
console.log(Ronnie)

// Ronnie is now vacunated !