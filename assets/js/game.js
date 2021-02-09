// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less




// player stats
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


// enemy stats
var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyAttack = 12;

var fight = function(enemyName) {
        // Alert users that they are starting the round
    while(enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;

            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!")
            }
            else {
                window.alert(enemyName + " now has " + enemyHealth + " health remaining.")
            };

            playerHealth = playerHealth - enemyAttack;

            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!")
            }
            else {
                window.alert(playerName + " now has " + playerHealth + " health remaining.")
            }
        }
        else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm ("Are you sure you would like to quit?")

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                playerMoney = playerMoney - 2;
            }
            else {
                fight();
            }
        }
        else {
            window.alert("You need to pick a valid option.  Try again!")
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}