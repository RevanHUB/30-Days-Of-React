import users from './users.js';
import products from './products.js';

// Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of
// incomes and its description.

    let personAccount = {
        firstName: null,
        lastName: null,
        incomes: null,
        expenses: null,
        totalIncome : function () {
            return this.incomes.reduce((acc, curr) => acc + curr, 0);
        },
        totalExpense: function() {
            return this.expenses.reduce((acc, curr) => acc + curr, 0);
        },
        accountInfo: function() {
            return this.lastName + ' ' + this.firstName + ' has ' + this.totalIncome() + ' and ' + this.totalExpense() + ' in total.';
        },
        addIncome: function(income) {
            this.incomes.push(income);
        },
        addExpense: function(expense) {
            this.expenses.push(expense);
        },
        accountBalance: function() {
            return totalIncome() - totalExpense();
        }
    }
    personAccount.firstName = 'John';
    personAccount.lastName = 'Doe';
    personAccount.incomes = [100, 200, 300];
    personAccount.expenses = [50, 100, 150];
    console.log(personAccount);
    console.log(personAccount.accountInfo());
    personAccount.firstName = 'Marcus';
    personAccount.lastName = 'Fargon';
    personAccount.incomes = [100, 200, 300];
    personAccount.expenses = [50, 100, 150];
    console.log(personAccount);
    console.log(personAccount.accountInfo());




// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
console.log("-----------2---------")
console.log(users)
console.log(products)

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection.

    function signUP(id, username, email, password) {
        
        if (users.find(user => user.username === username)) {
            console.log("user already exists")
        } else {
            let date = new Date();
            let dateStr = date.toString();
            users.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: dateStr,
                isLoggedIn: true
            })
        }
    }

     signUP('dmarcon', 'David', 'davidasir2020@gmail.com', '123456', '08/01/2020 9:00 AM', true);
     console.log(users);
    

// If user exists, inform the user that he has already an account.

signUP('ab12ex', 'Alex', ''); // user already exists in console. 
// b. Create a function called signIn which allows user to sign in to the application

function signIn(username, password) {
    if (users.find(user => user.username === username && user.password === password)) {
        console.log("you logged in!");
    } else {
        console.log("your credentials are wrong.")
    }
}
signIn('Asab', '123454'); // credentials wrong in console.
signIn('David', '123456')   // you logged in in console.
// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
 function rateProduct(id, rating, userId) {
     let product = products.find(product => product._id === id);
     if (product) {
         product.ratings.push({
                userId: userId,
                rate: rating
         });
         console.log("rating added")
     } else {
         console.log("enter correct values")
     }
 }
rateProduct('aegfal', 4, 'abcde');
console.log(products)
products.push({ 
    id: 'aegfac',
    name: 'Laptop Razer',
    description: 'Razer: Gaming Laptop',
    price: 2500,
    ratings: [{}],
    likes: [],
})
console.log(products);
// b. Create a function called averageRating which calculate the average rating of a product

    function averageRating(id) {
        let product = products.find(product => product._id === id);
        if (product) {
            let ratings = product.ratings;
            let sum = ratings.reduce((acc, curr) => acc + curr.rate, 0);
            let average = sum / ratings.length;
            console.log("average rating = " + average);
            return average;
        } else {
            console.log("enter correct values");
        }
    }
     averageRating('eedfcf');
    console.log(products.find(product => product._id === "aegfal"))

// Create a function called likeProduct. This function will helps to like to the product if it is not liked
// and remove like if it was liked

    function likeProduct(id, userId) {
        let product = products.find(product => product._id === id);
        if (product) {
            if (product.likes.includes(userId)) {
                product.likes.splice(product.likes.indexOf(userId), 1);
            } else {
                product.likes.push(userId);
            }
        } else {
            console.log("enter correct values");
        }
    }

    likeProduct('aegfal', 'abcde');
    console.log(products);

// End of exercise