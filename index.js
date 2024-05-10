// Calculator Program 

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        const result = eval(display.value)

if (isNaN(result) || result === Infinity) display.value = "Math Error"
else display.value = result

    }
    catch(error){
        display.value = "Error";
    }
}



