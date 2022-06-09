// Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code. If you want to compare your solution with my solution, check this link.

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  getPersonInfo: function () {
    return this.firstName + " lives in " + this.country + ". He is "+ this.age + " years old. He is " + this.job + ". He teaches " + this.skills + ". He speaks " + this.languages + ".";
  }
}
console.log(person.getPersonInfo())

// end of exercise

