import users from './config.js';
import countries from './countries.js';
console.log(users);
//console.log(users.Alex); // each one is a property

// Find the person who has the most skills in the users object.
console.log("------");
// console.log (users.Alex.skills.length);

const userWithMaxSkills = users => Object.entries(users)
.reduce((res, [username, data]) => {
    if(data.skills.length > res.maxSkills){
      return {
        maxSkills: data.skills.length,
        user: {
          [username]: data
        }
      }
    }
    return res
},
 {
  maxSkills: -1,
  user: undefined
 }
).user
//
const result = Object.fromEntries([
    Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
  ]);

console.log(result);
console.log(userWithMaxSkills(users));


// Count logged in users,count users having greater than equal to 50 points from the following object.
  console.log(users);
  console.log("------");
  let moreThan50 = Object.keys(users).filter(user => users[user].points >= 50 );
  let loggedInUsers = Object.keys(users).filter(user => users[user].isLoggedIn === true);
  console.log(loggedInUsers)
  console.log(moreThan50);


// Find people who are MERN stack developer from the users object

// const usersWithMern = Object.entries(users).filter(user => users[user].skills == 'HTML'? true : false);
// console.log(usersWithMern); TODO: fix this

// Set your name in the users object without modifying the original users object


  let copyUsers = Object.entries(users);
  console.log(copyUsers);
  copyUsers.push(['David', {
    email: 'davidasir2020@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Python', 'SQL', 'PHP'],
    age: 30,
    isLoggedIn: true,
    points: 0
  } ], );
  console.log(copyUsers);

// Get all keys or properties of users object

  console.log("------");
  console.log(Object.keys(users));

// Get all the values of users object

console.log("------");
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.

  var countriesObject = new Array();
  countriesObject.push(['Albania', {capital: 'Tirana', populations: 5000000, idiomas: 'Albanés'}]);
  console.log("------");
  console.log(countriesObject);

  // End of exercise
