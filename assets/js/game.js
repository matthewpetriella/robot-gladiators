var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract playerAttack from enemyHealth > update enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + " for " + playerAttack + " damage. " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

    //check enemyHealth
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract enemyAttack from playerHealth > update playerHealth variable
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + "for " + enemyAttack + " damage. " + playerName + " now has " + playerHealth + " health remaining. "
    );

    //check playerHealth

    if (playerHealth <= 0) {
        window.alert (playerName + " has died!");
    }

    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();