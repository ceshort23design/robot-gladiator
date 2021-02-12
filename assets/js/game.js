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

            // Generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);   // generates a random number between 20 and 40

    return value;
}

            // fight sequence
var fight = function(enemyName) {
        // Alert users that they are starting the round
    while(enemyHealth > 0 && playerHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm ("Are you sure you would like to quit?")

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!")
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        var playerDamage = randomNumber(playerAttack -3, playerAttack);   //determine how much damage the player deals
        enemyHealth = Math.max(0, enemyHealth - playerDamage);    // Update enemy health after player attacks

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
        var enemyDamage = randomNumber(enemyAttack -3, enemyAttack);   // determine how much damage enemy deals
        playerHealth = Math.max(0, playerHealth - enemyDamage);   // update player health after enemy attacks

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
            var pickedEnemyName = enemyNames[i]; // select enemy from array
            enemyHealth = randomNumber(40, 60);  // get enemyHealth from randomNumber() function
            console.log(pickedEnemyName, enemyHealth)
            fight(pickedEnemyName);

            if (playerHealth >0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm) {
                    shop();   // If there are any enemies left, player has survived, and chooses to, go to the shop
                }
            }
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

var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your Attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {   // check if player has enough money
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerHealth = playerHealth + 20;  // add 20 to player's current health
                playerMoney = playerMoney - 7;  // charge the player 7 dollars
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "UPGRADE":
        case "upgrade": 
            if (playerMoney >= 7) {   // check if player has enough money
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                playerAttack = playerAttack + 6;   // add 6 to player's attack
                playerMoney = playerMoney - 7;   // charge the player 7 dollars
            }  
            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option.  Try Again.");
            shop();
            break;
    }
};

startGame();