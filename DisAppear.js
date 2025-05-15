function Disappear()
{
    document.getElementById('div').style.display = "none";
}
function Appear()
{
    document.getElementById('div').style.display ="";
}
function Change()
{
    let myName = prompt('What Is Your Name?')
    document.getElementById('div').innerText = "Hello, " + myName + ". Have a Nice Day"
}
function Toggle()
{
    document.getElementById('div').style.display = document.getElementById('div').style.display == 'none' ? 'block' : 'none';
}
function birthdayColor()
{
    let red, blue, green
    let today = new Date()
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value

    if (day >=1 && day <=31)
    {
        red = day / 31 * 255;
        document.getElementById('day').style.backgroundColor = "white"
    }
    else 
    {
        document.getElementById('day').style.backgroundColor = "red"
    }
    if (month >=1 && month <=12)
    {
        green = month / 12 * 255;
        document.getElementById('month').style.backgroundColor = "white"
    }
    else 
    {
        document.getElementById('month').style.backgroundColor = "red"
    }
    if (year >= (today.getFullYear() - 83) && year <= (today.getFullYear()))
    {
        blue = (today.getFullYear()-year) / 83 * 255;
        document.getElementById('year').style.backgroundColor = "white"
    }
    else 
    {
        document.getElementById('year').style.backgroundColor = "red"
    }

    console.log(`rgb( ${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`)
    
    document.getElementById('div').style.backgroundColor = `rgb( ${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}