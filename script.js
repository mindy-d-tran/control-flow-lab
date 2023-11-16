//Part One
console.log("===== Part 1 =====")
// Declaring variables
// contains radius of area the plants
const plantRadius = 5;
//calculate max capacity of plant area
const maxCapacity = Math.PI * plantRadius ** 2;
// contains area of one plant 
const plantArea = 0.8;

// creating functions
// calculate how many much space the plants will take in x weeks
const plantGrowthSpace = (weeks) => {
    // console.log(plantArea * 2 ** weeks);
    return plantArea * 2 ** weeks;
}

// function plantDecision () {
//     if() {

//     }
// }