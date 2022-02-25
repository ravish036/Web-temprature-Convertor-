const Calculatetemp = () => {

    const numberTemp = document.getElementById('temp').value;
    
    const temptype = document.getElementById('temp_diff');
    const tempvalue= temp_diff.options[temptype.selectedIndex].value;
    // console.log(tempvalue);


    // functions //
    const tempToCel = (cel) => {
        let Celcius = Math.round((cel - 32) * 5/9);
        return Celcius;
    }
    const tempToFah = (feh) => {
        let fahrenhiet = Math.round((feh * 9/5) + 32);
        return fahrenhiet;
    }
    const tempToKel = (kel) => {
        let Kelvin = Math.round(kel+273.15);
        return Kelvin;
    }
    function fahToKel(kel) {
        let Kelvin = Math.round(kel+255.92);
        return Kelvin;
    }
    


    let resultOne;
    let resultTwo;

    if( tempvalue == 'cel'){
        resultOne = tempToFah(numberTemp);
        resultTwo = tempToKel(numberTemp);
        document.getElementById('resContainer1').innerHTML= `= ${resultOne} °Fahrenhiet`;
        document.getElementById('resContainer2').innerHTML= `= ${resultTwo} °Kelvin`;
    }
    else if( tempvalue == 'fah'){
        resultOne= tempToCel(numberTemp);
        resultTwo = fahToKel(numberTemp);
        document.getElementById('resContainer1').innerHTML= `= ${resultOne}°Celcius`;
        document.getElementById('resContainer2').innerHTML= `= ${resultTwo}°Kelvin`;
    }
    else {
        resultOne = tempToCel(numberTemp);
        resultTwo = tempToFah(numberTemp);
        document.getElementById('resContainer1').innerHTML= `= ${resultOne}°Celcius`;
        document.getElementById('resContainer2').innerHTML= `= ${resultTwo}°Fahrenhiet`;
    }
 }