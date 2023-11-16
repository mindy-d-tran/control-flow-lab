//Part 1
console.log("===== Part 1 =====");
// Declaring variables
const plantRadius = 5;
const maxCapacity = Math.PI * plantRadius ** 2;
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
    if(currentCapacity > 0.8) {
        console.log(`Current capacity: ${currentCapacity.toFixed(2)}. Prune`);
    } else if(0.8 >= currentCapacity && currentCapacity >= 0.5) {
        console.log(`Current capacity: ${currentCapacity.toFixed(2)}. Monitor`);
    } else {
        console.log(`Current capacity: ${currentCapacity.toFixed(2)}. Plant`);
    }
}

let weekCapacity;

// print out results for week 1 - week 3
for(let i = 1; i < 4; i++) {
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
console.log("===== Part 3 =====");

let originalCapacity = plantGrowthSpace(currentPlants, 0);
// tries code
try {
    if(originalCapacity < maxCapacity) {
        console.log(`Within capacity`);
    } else {
        throw "Too much flowers already";
    }
// shows error to user
} catch(e) {  
    console.log(e);

// does regardless if there's an error or not
} finally {
    console.log(`Original Capacity: ${originalCapacity.toFixed(2)}`);
}