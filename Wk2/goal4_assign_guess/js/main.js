/**
 * GUESSING GAME:
 *
 * Created By: Esteban Gonzalez
 * Date: 5/16/2014
 * 
 * GUESSING GAME
 */

    var rand = Math.floor(Math.random()*10+1);

    var button = document.getElementById('input');
//    button.addEventListner('click', validate(e,rand), false);


function validate(input,computerChoice)
{
    if(input >=0 || 0 >= input)
    {
        if(input >= 1 || input <= 10)
        {
            checkNumbers(input,computerChoice);
        }
        else
        {
            alert("you need to input a number between 1 and 10");
        }
    }
    else
    {
        alert("That is not a valid input. Please only use numbers");
    }
}

function checkNumbers(guess,answer)
{

    if(guess > answer)
    {

    }
    else if(guess < answer)
    {

    }
    else{}
}

//Game variables
