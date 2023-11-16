//Part One
console.log("===== Part 1 =====")
// Declaring variables
// contains radius of area the plants
const plantRadius = 5;
//calculate max capacity of plant area
const maxCapacity = Math.PI * plantRadius ** 2;
// contains area of one plant 
const plantArea = 0.8;
let currentPlants = 20;
// creating functions
// calculate how many much space the plants will take in x weeks
const plantGrowthSpace = (plants, weeks) => {
    // console.log(plantArea * 2 ** weeks);
    return plants * plantArea * 2 ** weeks;
}

function plantDecision (currentSpace) {
    let currentCapacity = currentSpace/ maxCapacity;
    if(currentCapacity >= 0.8) {
        console.log(`Current capacity: ${currentCapacity}. Prune`);
    } else if(0.8 > currentCapacity && currentCapacity >= 0.5) {
        console.log(`Current capacity: ${currentCapacity}. Monitor`);
    } else {
        console.log(`Current capacity: ${currentCapacity}. Plant`);
    }
}

let week1Capacity = plantGrowthSpace(currentPlants, 1);
let week2Capacity = plantGrowthSpace(currentPlants, 2);
let week3Capacity = plantGrowthSpace(currentPlants, 3);

console.log(`${week1Capacity} ${week2Capacity} ${week3Capacity}`);

plantDecision(week1Capacity);
plantDecision(week2Capacity);
plantDecision(week3Capacity);