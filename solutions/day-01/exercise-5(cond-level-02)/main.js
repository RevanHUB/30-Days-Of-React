// Uncomment tab lines for exercise check
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

    // var score = prompt("Enter your score: ");
    // if ( score >= 80 && score <= 100) {
    //     alert("You had an 'A' grade, Congratz! ");
    // } else if (score >= 70 && score <= 79) {
    //     alert("You had an 'B' grade, Good Job! ");
    // } else if (score >= 60 && score <= 69) {
    //     alert("You had an 'C' grade, Keep it up! ");
    // } else if (score >= 50 && score <= 59) {
    //     alert("You had an 'D' grade, You can do better! ");
    // } else if (score >= 0 && score <= 49) {
    //     alert("You had an 'F' grade, You need to study harder! ");
    // } else {
    //     alert("Invalid score");
    // }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

    // var month = prompt("Enter the month: ");
    
    // if (month === "September" || month === "October" || month === "November") {
    //     alert("The season is Autumn");
    // } else if (month === "December" || month === "January" || month === "February") {
    //     alert("The season is Winter");
    // } else if (month === "March" || month === "April" || month === "May") {
    //     alert("The season is Spring");
    // } else if (month === "June" || month === "July" || month === "August") {
    //     alert("The season is Summer");
    // } else {
    //     alert("Incorrect value");
    // }

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

    var day = prompt("Enter your day: ");
    var minusDay = day.toLowerCase().trim();
    var filteredDay = minusDay[0].toUpperCase() + minusDay.slice(1);

    if (filteredDay === "Monday" || filteredDay === "Tuesday" || filteredDay === "Wednesday" || filteredDay === "Thursday" || filteredDay === "Friday") {
        alert(filteredDay + " it's a working day");
    } else if (filteredDay === "Saturday" || filteredDay === "Sunday") {
        alert(filteredDay + " it's a weekend");
    } else {
        alert("Incorrect value");
    }

// End of exercise