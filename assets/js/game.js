
// player stats
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

// enemy stats
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
        // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

        // Subtract the value of 'playerAttack' from 'enemyHealth' and use that result to update the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

        // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!")
    }
    else {
        window.alert(enemyName + " now has " + enemyHealth + " health remaining.")
    };

        // Subtract the value of 'enemyAttack' from 'playerHealth' and use that result to update the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

        // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " now has " + playerHealth + " health remaining.")
    }

};

fight();