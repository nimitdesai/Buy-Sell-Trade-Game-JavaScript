var game = function() {
        var gold = 0;
        var trade = prompt("What would you like to trade? JESUS STATUE, DRAGON HAIR, PIZZA" + "         " + "Gold: " + gold).toUpperCase();
        switch (trade) {
        case 'JESUS STATUE':
            var haveJesusStatue = prompt("Do you have a JESUS Statue? (Yes or No)").toUpperCase();
            if (haveJesusStatue === "YES") {
                var sellItJesusStatue = prompt("Do you want to sell the JESUS STATUE? (Yes or No)").toUpperCase();
                window.sellIt = sellJesusStatue;
            } else {
                game();
            }
            if (haveJesusStatue && sellJesusStatue === "YES") {
                console.log("CONGRATULATIONS! You just sold a Jesus Statue! Have some gold!");
                gold++;
                console.log("You received " + gold + "Gold");
            } else {
                alert("Let's try again!");
                game();
            }
            break;
        case 'DRAGON HAIR':
            var haveDragonHair = prompt("Do you have Dragon Hair? (YES OR NO)").toUpperCase();
            if (haveDragonHair === "YES") {
                var sellItDragonHair = prompt("Would you like to sell the Dragon Hair? (YES OR NO)").toUpperCase();
                window.sellIt = sellDragonHair;
            } else {
                game();
            }
            if (haveDragonHair && sellDragonHair === "YES") {
                console.log("CONGRATULATIONS! You just sold some Dragon Hair! Have some gold!");
                gold++;
                console.log("You received " + gold + "Gold");
            } else {
                alert("Let's try that again shall we?");
                game();
            }
            break;
        case 'PIZZA':
            var buyPizza = prompt("Would you like to buy Pizza? (YES OR NO)").toUpperCase();
            if (buyPizza === "YES") {
                var haveGold = prompt("Do you have gold? (YES OR NO)").toUpperCase();
                if (haveGold === "YES") {
                    if (gold <= 0) {
                        alert("Sorry you have " + gold + " Gold!");
                        game();
                    }
                } else {
                    var loanPizza = prompt("Would you like to loan some Pizza? (YES OR NO)").toUpperCase();
                }
            }
            if (loanPizza || gold > 0 === "YES") {
                console.log("You just got some pizza! Enjoy the food.");
                if (haveGold === "YES") {
                    gold--;
                } else {
                    gold--;
                    alert("You owe me for one Pizza!");
                    alert("1 GOLD has been removed from your account. Your total balance right now is " + gold + " gold!");
                }
            }
            break;
        default:
            alert("Sorry I didn't catch that, what would you like to do again?");
            game();
            break;
        }
    };