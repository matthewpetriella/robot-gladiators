//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * FIGHT all enemy-robots
//  * DEFEAT all enemy-robots
//"LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

    //if player chose to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract playerAttack from enemyHealth > update enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " for " + playerAttack + " damage. " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemyHealth
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract enemyAttack from playerHealth > update playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + "for " + enemyAttack + " damage. " + playerName + " now has " + playerHealth + " health remaining. "
        );

        //check playerHealth
        if (playerHealth <= 0) {
            window.alert (playerName + " has died!");
        }else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    
        // if player chose to skip
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract playerMoney for skip penalty
        playerMoney = playerMoney - 2;
        }
        //if no (false), run fight () again
        else {
            fight();
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}