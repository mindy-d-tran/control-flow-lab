//Part 1
console.log("===== Part 1 =====");
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

// tells what to do with the plants;
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

let weekCapacity;

for(let i = 1; i <4; i++) {
    weekCapacity = plantGrowthSpace(currentPlants, i);
    plantDecision(weekCapacity);
}

// Part 2 
console.log("===== Part 2 =====");

currentPlants = 100;
weekCapacity = plantGrowthSpace(currentPlants, 10);

const findRadius = (currentCapacity) => {
    return Math.sqrt(currentCapacity/ Math.PI); 
}

console.log(findRadius(weekCapacity));

// Part 3 
console.log("===== Part 2 =====");

