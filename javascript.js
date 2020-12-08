const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById("copy");

const gen = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getNumber,
    symbol: getSymbol,
};

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const haslow = lowercaseEl.checked;
    const hasupper = uppercaseEl.checked;
    const hasnumber = numberEl.checked;
    const hassym = symbolEl.checked;
    resultEl.innerText = generatePassword(haslow, hasupper, hasnumber, hassym, length);
});

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password has been Copied!')
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if(typesCount === 0) {
        return '';
    }
    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            generatedPassword += gen[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
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
