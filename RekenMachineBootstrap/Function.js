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
let OefenTafeller = 0;
let randomOefenTeller = 0;
let randomOefenUitkomst = 0;
let OefenTafelinputObj = document.getElementById("inputOefenTafel");
let randomOefenTafeloutputObj = document.getElementById("outputRandomOefenTafel");
let randomOefenTafelinputObj = document.getElementById("inputRandomOefenTafel");
let randomOefenTafelAntwoordObj = document.getElementById("randomOefenUitkomst");


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

function startOefenTafel()
{
    OefenTafeller = Number(OefenTafelinputObj.value);

    if (OefenTafeller < 1 || OefenTafeller > 100)
    {
        randomOefenTafeloutputObj.innerHTML = "Kies een tafel tussen 1 en 100!";
        return;
    }

    randomOefenTafel();
}

function randomOefenTafel()
{
    randomOefenTeller = Math.floor(Math.random() * 10) + 1;
    randomOefenUitkomst = OefenTafeller * randomOefenTeller;

    randomOefenTafeloutputObj.innerHTML =
        OefenTafeller + " x " + randomOefenTeller + " = ";

    randomOefenTafelinputObj.value = "";
    randomOefenTafelAntwoordObj.innerHTML = "";
}

function randomOefenTafelifCorrect()
{
    if (Number(randomOefenTafelinputObj.value) === randomOefenUitkomst)
    {
        randomOefenTafelAntwoordObj.innerHTML = "Dat is correct, volgende som:<br>";
        randomOefenTafel();
    }
    else
    {
        randomOefenTafelAntwoordObj.innerHTML = "Dat is fout, probeer opnieuw!";
    }
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