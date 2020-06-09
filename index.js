const fifaData = require('./fifa')
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const hTeamName = fifaData.filter(element => (element["Year"] === 2014 && element.Stage === "Final"));
console.log(hTeamName[0]["Home Team Name"]);
console.log(hTeamName[0]["Away Team Name"]);
console.log(hTeamName[0]["Home Team Goals"]);
console.log(hTeamName[0]["Away Team Goals"]);
console.log(hTeamName[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(fifaData) {
    let forEached = fifaData.filter(element => element.Stage === "Final");
        return forEached;
}
console.log(getFinals(fifaData))

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
    let yearArray = cb.map(year => year["Year"]);
    return yearArray;
};

console.log(getYears(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(fifaData, cb){
    return cb (fifaData).map((game) => {
        if (game["Away Team Goals"] > game["Home Team Goals"])
            return game["Away Team Name"];
        if (game["Away Team Goals"] <= game["Home Team Goals"])
            return game["Home Team Name"];
        const winner = game["Win conditions"].match(/\w+/);
        return winner ? winner[0] : null;
    });
}

const winners = getWinners(fifaData,getFinals);

console.log(winners);

// const getWinners = cb => cb.forEach((name) => {
//     const winners = [];

//     let homeGoals = cb[0]["Home Team Goals"];
//     let awayGoals = cb[0]["Away Team Goals"];

//     if (homeGoals > awayGoals) {    
//         return winners.push(name["Home Team Name"]);
//     } else {
//         return winners.push(name["Away Team Name"]);
//         }  
//     return winners;
// })
// console.log(getWinners(getFinals(fifaData)))


// function getWinners(cb) {
//     let homeGoals = cb[0]["Home Team Goals"];
//     let awayGoals = cb[0]["Away Team Goals"];

//     const winners = cb.forEach((name) => {
//         if (homeGoals > awayGoals) {
//             return name["Home Team Goals"];
//         } else {
//             return name["Away Team Goals"];
//         }

//     })
//     return winners;
// }

// console.log(getWinners(getFinals(fifaData)));


// function getWinners(cb) {
//     const result = cb.filter(futbol => futbol["Home Team Goals"] > futbol["Away Team Goals"]);
//     const result2 = cb.filter(balls => balls["Home Team Goals"] < balls["Away Team Goals"]);
//     return (result.concat(result2));
// }
// console.log(getWinners(getFinals(fifaData)));




// function getWinners(cb) {
//     const winners = cb.filter((golazo) => {
//         if (cb["Home Team Goals"] > cb["Away Team Goals"]) {
//             return (cb["Home Team Name"]);
//         }
//         else if (cb["Home Team Goals"] < cb["Away Team Goals"]) {
//            return (cb["Away Team Name"]);
//         }
//     })   
// }

// console.log(getWinners(getFinals(fifaData)));




/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbWin, cbYear) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
