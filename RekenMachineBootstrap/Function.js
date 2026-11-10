let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");
let randomTafeloutputObj = document.getElementById("outputRandomTafel");
let randomTafelAntwoordObj = document.getElementById("antRandomTafel");
let randomTafelinputObj = document.getElementById("inputRandomTafel");
let tafelinput3Obj = document.getElementById("inputTafel3");
let tafeloutput3Obj = document.getElementById("outputTafel3");
let randomTafeller = 0;
let randomTeller = 0;
let randomUitkomst = 0;

function showTafel() {
    let tafel = tafelinputObj.value
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    tafeloutputObj.innerHTML = output;
}
function randomTafel() 
{
    randomTafeller = Math.floor(Math.random() * 10) + 1;
    randomTeller = Math.floor(Math.random() * 10) + 1;
    randomUitkomst = randomTafeller * randomTeller;

    randomTafeloutputObj.innerHTML = 
        randomTafeller + " x " + randomTeller + " = ";
    
    randomTafelinputObj.value = "";
    randomTafelAntwoordObj.innerHTML = "";
}
function randomTafelifCorrect()
{
    if (Number(randomTafelinputObj.value) === randomUitkomst) 
    {
        randomTafelAntwoordObj.innerHTML = "Dat is correct, volgende som:<br>";
        randomTafel();
    }
    else
    {
        randomTafelAntwoordObj.innerHTML = "Dat is fout, probeer opnieuw:<br>";
    }
}
randomTafel();