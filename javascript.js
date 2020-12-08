function copy(text) {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert('Password has been Copied!')
}


function generatePassword(){
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var number = document.getElementById('number').checked;
    var symbol = document.getElementById('symbol').checked;

    var result = "";

    for(var i = 0;i < (getLength()/getChecked()); i++){
        console.log("hit")
        if (uppercase) {
            result += getUpperCase()
        }
        if (lowercase) {
            result += getLowerCase()
        }
        if (number) {
            result += getNumber()
        }
        if (symbol) {
            result += getSymbol()
        }
    }



    document.getElementById("result").innerHTML = result

    console.log(getLength());

    console.log("string length",result.length);

    console.log("checked", getChecked())
}

function getLowerCase(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase [Math.floor(Math.random() * lowercase.length)];
}

function getUpperCase(){
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase [Math.floor(Math.random() * uppercase.length)];
}

function getNumber(){
    const numbs = "1234567890";
    return numbs [Math.floor(Math.random() * numbs.length)];
}

function getSymbol(){
    const symbol = "!?$%^&().'/";
    return symbol [Math.floor(Math.random() * symbol.length)];
} 


function getLength(){
    return document.getElementById("length").value
}

function getChecked(){
    var uppercase = document.getElementById('uppercase').checked;
    var lowercase = document.getElementById('lowercase').checked;
    var number = document.getElementById('number').checked;
    var symbol = document.getElementById('symbol').checked;

    var checked = 0
    if (uppercase) {
        checked +=1 
    }
    if (lowercase) {
        checked +=1 
    }
    if (number) {
        checked +=1 
    }
    if (symbol) {
        checked +=1
    }
    return checked
}

function getResult(){
    if (document.getElementById('result').innerHTML == null){
        return ""
    }
    else {
        return document.getElementById('result').innerHTML
    }
}
