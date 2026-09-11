// Random Dice Generator using Node.js crypto module

const crypto = require("crypto");

function rollDice() {
    // Generate a secure random integer from 1 to 6
    return crypto.randomInt(1, 7);
}

console.log("Dice simulator started...");

const numberOfRolls = 5;

for (let i = 1; i <= numberOfRolls; i++) {
    const diceValue = rollDice();
    console.log(`Roll ${i}: Dice Rolled: ${diceValue}`);
}

console.log("Dice simulator finished.");
