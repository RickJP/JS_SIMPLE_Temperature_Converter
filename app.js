const celsiusIn = document.querySelector('#celsius > input');
const fahrenheitIn = document.querySelector('#fahrenheit > input');
const kelvinIn = document.querySelector('#kelvin > input');

function getMultiplier() {
    let noOfDigits = 3;       /* decimal places precision */
    let out = '1';

    for (i = 1; i < noOfDigits; i++) {
	    out += '0';
    }   
    return(parseInt(out));
}

function roundItDown(num) {
    let multiplier = getMultiplier();
    return Math.round(num * multiplier) / multiplier;
}

function celsiusToFahrenheitAndKelvin() {
    const cTemp = parseFloat(celsiusIn.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    
    fahrenheitIn.value = roundItDown(fTemp);
    kelvinIn.value = roundItDown(kTemp);
};

function fahrenheitToCelsiusAndKelvin() {
    const fTemp = parseFloat(fahrenheitIn.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    
    celsiusIn.value = roundItDown(cTemp);
    kelvinIn.value = roundItDown(kTemp);
}

function kelvinToCelsiusAndFahrenheit() {
    const kTemp = parseFloat(kelvinIn.value);
    const cTemp = kTemp - 273.15;
    const FTemp = 9 / 5 * (kTemp - 273) + 32;

    celsiusIn.value = roundItDown(cTemp);
    fahrenheitIn.value = roundItDown(fTemp);
}

function main() {
    celsiusIn.addEventListener('input', celsiusToFahrenheitAndKelvin);  
    fahrenheitIn.addEventListener('input', fahrenheitToCelsiusAndKelvin);
    kelvinIn.addEventListener('input', kelvinToCelsiusAndFahrenheit);

    
}

main();