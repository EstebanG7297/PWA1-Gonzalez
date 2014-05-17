/*

Esteban Gonzalez
5/16/2014

 */

/*NOTE: my original Duel files already used arrays and had functions that used them. I just want to clarify
this in case of any confusion why there might be two versions of this work.
 */


    var name = 0;
    var health = 1;
    var minDamage = 2;
    var maxDamage = 3;

    var continueGame = true;

var playerOne = ["Kabal", 100, 15, 60];

var playerTwo = ["Kratos", 115, 25, 50];

alert(playerOne[name] + ": " + playerOne[health] + "** start **" + playerTwo[name] + ": " + playerTwo[health]);

fight();



function fight()
{
    for(var i = 0; i < 10; i++)
    {
        if(continueGame==true){
        calcDamage(playerOne,playerTwo);
        }

        if(continueGame==true){
        calcDamage(playerTwo,playerOne);
        }

        if (continueGame==true)
        {alert(playerOne[name] + ": " + playerOne[health] + "** Round " + (i+ 1) + " over ** " + playerTwo[name] + ": " + playerTwo[health]);
        }

        else{break;}
    }

    if(i==10){alert("There were no winners");}

}

function calcDamage(attacker, defender)
{
    var damage;
    damage = Math.floor(Math.random() * (attacker[maxDamage] - attacker[minDamage]) + attacker[minDamage] );

    defender[health] = defender[health] - damage;
    console.log(defender[name] + " " + defender[health]);


    winnerCheck(attacker, defender);
}

function winnerCheck(attacker,defender)
{
    if(defender[health] < 0){continueGame=false;
    alert(attacker[name] + " wins!");}
}
