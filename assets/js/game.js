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
    while(enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm ("Are you sure you would like to quit?")

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }
        enemyHealth = enemyHealth - playerAttack;

        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!")
            playerMoney = playerMoney + 20;
            console.log("playerMoney", playerMoney)
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
        };

        playerHealth = playerHealth - enemyAttack;

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        if (playerHealth <= 0) {
            window.alert("You have lost your robot in battle! Game over, man! Game Over!")
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.")
        }
    }
};

            // Function to start new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {  // If player is still alive
            window.alert(" Welcome to Robot Gladiators! Round " + (i + 1) + " - Fight!");
            console.log(playerHealth, playerAttack, playerMoney);
            var pickedEnemyName = enemyNames[i]; // select enemy from array
            enemyHealth = 50;  // set enemy health to 50
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game over, man! Game Over!")
        }
    }
    endGame();
};

            // Function to end the game 
var endGame = function() {
    window.alert("The game has ended.  Let's see how your did!");

    if(playerHealth > 0) {  // If player survived
        window.alert("Great job, you survived the game!  You now have a score of " + playerMoney + ".");
    }
    else {   // if player died
        window.alert("You've lost your robot in battle!")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();