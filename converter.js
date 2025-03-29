// Get input elements and display elements by their IDs
let celsiusInput1= document.getElementById("celsiusA");
let fahrInput1= document.getElementById("fahrenheitA");
let celsiusInput2= document.getElementById("celsiusB");
let kelvinInput1= document.getElementById("kelvinA");
let fahrInput2= document.getElementById("fahrenheitB");
let kelvinInput2 = document.getElementById("kelvinB");
let kiloInput1 = document.getElementById("kiloA");
let kiloInput2 = document.getElementById("kiloB");
let poundInput1 = document.getElementById("poundA");
let poundInput2 = document.getElementById("poundB");
let gramInput1 = document.getElementById("gramA");
let gramInput2 = document.getElementById("gramB");
let meterInput1 = document.getElementById("metersA");
let meterInput2 = document.getElementById("metersB");
let feetInput1 = document.getElementById("feetsA");
let feetInput2 = document.getElementById("feetsB");
let inchInput1 = document.getElementById("inchesA");
let inchInput2 = document.getElementById("inchesB");
let kilo_meterInput1 = document.getElementById("kilometersA");
let kilo_meterInput2 = document.getElementById("kilometersB");
let mileInput1 = document.getElementById("milesA");
let meterInput4 = document.getElementById("metersD");
let mileInput2 = document.getElementById("milesB");
let meterInput3 = document.getElementById("metersC");
let KmperhrInput1 = document.getElementById("km-hrA");
let KmperhrInput2 = document.getElementById("km-hrB");
let mpersecInput1 = document.getElementById("m-secA");
let mpersecInput2 = document.getElementById("m-secB");
let miperhrInput1 = document.getElementById("mi-hrA");
let miperhrInput2 = document.getElementById("mi-hrB");
let hectareInput1 = document.getElementById("hectareA");
let hectareInput2 = document.getElementById("hectareB");
let arceInput1 = document.getElementById("acreA");
let arceInput2 = document.getElementById("acreB");
let arceInput3 = document.getElementById("acreC");
let meter2Input1 = document.getElementById("meter2A");
let meter2Input2 = document.getElementById("meter2B");
let foot2Input = document.getElementById("foot2");
// function to convert celsuis to fahrenheit
function celsiusToFahr(){
    let celsius = parseFloat(celsiusInput1.value);
    let output = ((9/5)*celsius) + 32 ;
    fahrInput1.value =  parseFloat(output.toFixed(2));
}

// function to convert fahrenheit to celsuis
function fahrToCelsius(){
    let fahrenheit = parseFloat(fahrInput1.value);
    let output = (fahrenheit- 32) * 5/9;
    celsiusInput1.value = parseFloat( output.toFixed(2));
    // console.log(output);
}

// function to convert celsuis to kelvin
function celsiusToKelvin (){
    let celsius = parseFloat(celsiusInput2.value);
    let output = celsius + 273.15 ;
    kelvinInput1.value =  parseFloat(output.toFixed(4));
}

// function to convert kelvin to celsuis
function kelvinToCelsius(){
    let kelvin = parseFloat(fahrInput1.value);
    let output = kelvin - 273.15;
    celsiusInput2.value = parseFloat( output.toFixed(2));
}
// function to convert fahrenheit to kelvin
function fahrToKelvin(){
    let fahrenheit = parseFloat(fahrInput2.value);
    let output = ((fahrenheit- 32) * 5/9) + 273.15;
    kelvinInput2.value = parseFloat( output.toFixed(4));
}
//function convert kelvin to fahrenheit
function kelvinTofahr(){
    let kelvin = parseFloat(fahrInput1.value);
    let output = ((kelvin - 273.15)*(9/5)) + 32;
    celsiusInput2.value = parseFloat( output.toFixed(2));
}
//function to convert kilograms to pounds
function kiloTopound(){
    let kilo = parseFloat(kiloInput1.value);
    let output = (kilo*2.205)  ;
    poundInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert pounds to kilograms 
function poundTokilo(){
    let pound = parseFloat(poundInput1.value);
    let output = ((1/2.205)*pound);
    kiloInput1.value =  parseFloat(output.toFixed(2));
}

//function to convert kilograms to grams
function kiloTogram(){
    let kilo = parseFloat(kiloInput2.value);
    let output = (kilo/1000);
    gramInput1.value =  parseFloat(output.toFixed(3));
}
//function to convert  grams  to kilograms
function gramTokilo(){
    let gram = parseFloat(gramInput1.value);
    let output = (1000*gram);
    kiloInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert grams to pounds
function gramTopound(){
    let gram = parseFloat(gramInput2.value);
    let output = (gram/1000)/2.205 ;
    poundInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert pounds to grams 
function poundTogram(){
    let pound = parseFloat(poundInput2.value);
    let output = (pound*2.205)*1000 ;
    gramInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert meters to feet
function meterToFeet(){
    let meter = parseFloat(meterInput1.value);
    let output = (meter * 3.281);
    feetInput1.value =  parseFloat(output.toFixed(2))
}
//function to convert feet to meter
function feetTometer(){
    let feet = parseFloat(feetInput1.value);
    let output = ((1/3.281) * feet)  ;
    meterInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert meters to inches
function meterToinches(){
    let meter = parseFloat(meterInput2.value);
    let output = (meter * 39.37) ;
    inchInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert inches to meter
function inchesTometer(){
    let inch = parseFloat(inchInput1.value);
    let output = ((1/39.37)*inch) ;
    meterInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert feet to inches
function feetToinches(){
    let feet = parseFloat(feetInput2.value);
    let output = ((1/12) * feet);
    inchInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert inches to feet
function inchesTofeet(){
    let inch = parseFloat(inchInput2 .value);
    let output = (12 * inch );
    feetInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert kilometers to miles
function kiloTomile(){
    let kilom = parseFloat(kilo_meterInput1.value);
    let output = ((1/1.609)*kilom);
    mileInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert miles to kilometers
function mileTokilo(){
    let mile = parseFloat(mileInput1.value);
    let output = (1.609*mile);
    kilo_meterInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert kilometers to meters
function kiloTometer(){
    let kilo = parseFloat(kilo_meterInput2.value);
    let output = (0.001*kilo);
    meterInput3.value =  parseFloat(output.toFixed(2));
}
//function to convert meters to kilometers
function metersTokilo(){
    let meter = parseFloat(meterInput3.value);
    let output = (1000 *meter);
    kilo_meterInput2.value=  parseFloat(output.toFixed(2));
}
function mileTometer() {
    let mile = parseFloat(mileInput2.value);
    if (!isNaN(mile)) {
        let output = mile * 1609.34; // Correct formula for miles to meters
        meterInput4.value = parseFloat(output.toFixed(3)); // Round to 3 decimal places
    }
}

// Convert meters to miles
function meterTomile() {
    let meter = parseFloat(meterInput4.value);
    if (!isNaN(meter)) {
        let output = meter / 1609.34; // Correct formula for meters to miles
        mileInput2.value = parseFloat(output.toFixed(3)); // Round to 3 decimal places
    }
}

// function to convert kilometers/hr to miles/hr
function kmhrTomihr(){
    let kmhr = parseFloat(KmperhrInput1.value); // Corrected input reference
    let output = ((1 / 1.609) * kmhr); // Corrected km/h to mi/h formula
    miperhrInput1.value = parseFloat(output.toFixed(2));
}

// function to convert miles/hr to kilometers/hr
function mihrTokmhr(){
    let mihr = parseFloat(miperhrInput1.value);
    let output = (1.609 * mihr);
    KmperhrInput1.value = parseFloat(output.toFixed(2));
}

// function to convert kilometers/hr to meters/sec
function kmhrTomsec(){
    let kmhr = parseFloat(KmperhrInput2.value);
    let output = (kmhr / 3.6); // Corrected km/h to m/s formula
    mpersecInput1.value = parseFloat(output.toFixed(2));
}

// function to convert meters/sec to kilometers/hr
function msecTokmhr(){
    let msec = parseFloat(mpersecInput1.value);
    let output = (msec * 3.6); // Corrected m/s to km/h formula
    KmperhrInput2.value = parseFloat(output.toFixed(2));
}

// function to convert meters/sec to miles/hr
function msecTomihr(){
    let msec = parseFloat(mpersecInput2.value);
    let output = (msec * 2.237); // Corrected m/s to mi/h formula
    miperhrInput2.value = parseFloat(output.toFixed(2));
}

// function to convert miles/hr to meters/sec
function mihrTomsec(){
    let mihr = parseFloat(miperhrInput2.value);
    let output = (mihr / 2.237); // Corrected mi/h to m/s formula
    mpersecInput2.value = parseFloat(output.toFixed(2));
}

// function to convert hectare to meter²
function hectareTometer2(){
    let hectare = parseFloat(hectareInput1.value);
    let output = (10000 * hectare);
    meter2Input1.value = parseFloat(output.toFixed(2));
}

// function to convert meter² to hectare
function meter2Tohectare(){
    let meter2 = parseFloat(meter2Input1.value);
    let output = (meter2 / 10000);
    hectareInput1.value = parseFloat(output.toFixed(3));
}

//function to convert hectare to arce
function hectareToacre(){
    let hectare = parseFloat(hectareInput2.value);
    let output = ((1/2.471)*hectare );
    arceInput1.value =  parseFloat(output.toFixed(2));
}
//function to convert celsuis to fahrenheit
function acreTohectare(){
    let acre = parseFloat(arceInput1.value);
    let output = ((2.471)*acre);
    hectareInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert celsuis to fahrenheit
function acreTometer2(){
    let acre = parseFloat(arceInput2.value);
    let output = ((4047)*acre);
    meter2Input2.value =  parseFloat(output.toFixed(2));
}
//function to convert celsuis to fahrenheit
function meter2Toarce(){
    let meter2 = parseFloat(meter2Input2.value);
    let output = ((1/4047)*meter2);
    arceInput2.value =  parseFloat(output.toFixed(2));
}
//function to convert celsuis to fahrenheit
function acreTofoot2(){
    let acre = parseFloat(arceInput3.value);
    let output = ((43500)*acre);
    foot2Input.value =  parseFloat(output.toFixed(2));
}
//function to convert celsuis to fahrenheit
function foot2Toarce(){
    let foot2 = parseFloat(foot2Input.value);
    let output = ((1/43500)*foot2);
    arceInput3.value =  parseFloat(output.toFixed(2));
}


