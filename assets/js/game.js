
            // Generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);   // generates a random number between 20 and 40

    return value;
};

            // Prompt fight or skip
var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLocaleLowerCase();

    if (promptFight === "skip") {
        var confirmSkip = window.confirm ("Are you sure you would like to quit?")

        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");                
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            return true;
        }
    }
};

            // fight sequence
var fight = function(enemy) {
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while(enemy.health > 0 && playerInfo.health > 0) {  // Check that both player and enemy are still alive

        // Player attacks first
        if (isPlayerTurn) {
            if (fightOrSkip()) {  //  If player skips the fight
                break;
            }
            
            var playerDamage = randomNumber(playerInfo.attack -3, playerInfo.attack);   //determine how much damage the player deals
            enemy.health = Math.max(0, enemy.health - playerDamage);    // Update enemy health after player attacks

            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");   
            
            //  Check enemy health
            if (enemy.health <= 0) {        //  if enemy has died....
            window.alert(enemy.name + " has died!");        //  notify player and ....
            playerInfo.money = playerInfo.money + 20;       //  pay player 20 coins
            console.log("playerInfo.money", playerInfo.money);
            }
            else {      //  if enemy survived attack
                window.alert(enemy.name + " still has " + enemy.health + " health remaining.")  // alert player of enemy robot's status
            };
        }

        // Enemy attacks first
        else {
            var enemyDamage = randomNumber(enemy.attack -3, enemy.attack);   // determine how much damage enemy deals
            playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);   // update player health after enemy attacks

            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

            // Check player's health
            if (playerInfo.health <= 0) {       // If player has died ...
            window.alert("You have lost your robot in battle! Game over, man! Game Over!")      //  game over 
            }
            else {      // If player survived attack
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.")        // Alert player of their status 
            }
        }

        // switch turn order for next round
        isPlayerTurn = !isPlayerTurn;
    }
};

            // Function to set name
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }

    console.log("Your robot's name is " + name);
    return name;
}

            // Function to start new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {  // If player is still alive
            window.alert(" Welcome to Robot Gladiators! Round " + (i + 1) + " - Fight!");
            // debugger;
            var pickedEnemyObj = enemyInfo[i]; // select enemy from array
            pickedEnemyObj.health = randomNumber(40, 60);  // get enemyInfo.health from randomNumber() function
            console.log(pickedEnemyObj, pickedEnemyObj.health);
            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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

    if(playerInfo.health > 0) {  // If player survived
        window.alert("Great job, you survived the game!  You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your Attack, or LEAVE the store? Please choose: (1) REFILL, (2) UPGRADE, or (3) LEAVE to make a choice.");

    shopOptionPrompt = parseInt(shopOptionPrompt); // Change user input from string to integer

    switch (shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;

        case 2: 
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option.  Try Again.");
            shop();
            break;
    }
};
            // Game information and variables
            // player object
            var playerInfo = {
                name: getPlayerName(),
                health: 100,
                attack: 10,
                money: 10,
                reset: function() {
                    this.health = 100;
                    this.attack = 10;
                    this.money = 10;
                },
                refillHealth: function() {
                    if (this.money >= 7) {
                        window.alert("Refilling player's health by 20 for 7 dollars.");
                        this.health += 20;
                        this.money -= 7;
                    }
                    else {
                        window.alert("You don't have enough money!");
                    }
                },
                upgradeAttack: function() {
                    if (this.money > 7) {
                        window.alert("Upgrading player's attack by 6 for 7 dollars.");
                        this.attack += 6;
                        this.money -= 7;
                    }
                    else{
                        window.alert("You don't have enough money!")
                    }
                }
            };
            
                        // enemy object
            var enemyInfo = [
                {
                    name: "Roborto",
                    attack: randomNumber(10, 14)
                },
                {
                    name: "Amy Android",
                    attack: randomNumber(10, 14)
                },
                {
                    name: "Robo Trumble",
                    attack: randomNumber(10, 14)
                }
            ];

startGame();