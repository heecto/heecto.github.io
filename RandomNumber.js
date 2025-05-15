function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let randomNumber = 0

function resetButton()
{
    randomNumber = getRndInteger(1, 100) //Number(prompt("Enter Min")), Number(prompt("Enter Max"))
    console.log(randomNumber);

}

function makeGuess()
{
    let UserInput = document.getElementById('guessInput').value;

    if (randomNumber == UserInput)
    {
        document.getElementById('guessOutput').innerText = "Yee";
    }
    else if (randomNumber < UserInput)
    {
        document.getElementById('guessOutput').innerText = "Too High";
    }
        else if (randomNumber > UserInput)
    {
        document.getElementById('guessOutput').innerText = "Too Low";
    }
}