let numInput = document.getElementById('number-input');
let result = document.getElementById('result');
const convertBtn = document.getElementById('convert-btn');

window.onload = function() {
  numInput.value = '';
  result.textContent = '';
}
setInterval(() => {
    if (numInput.value === '') {
        result.textContent = '';
    }
}, 100);


function convertToRoman(input) {
  let roman = "";

while (input > 0) {
    switch (true) { 
      case input >= 1000:
        roman += "M";
        input -= 1000;
        break;

      case input >= 900:
        roman += "CM";
        input -= 900;
        break;

      case input >= 500:
        roman += "D";
        input -= 500;
        break;

      case input >= 400:
        roman += "CD";
        input -= 400;
        break;

      case input >= 100:
        roman += "C";
        input -= 100;
        break;

      case input >= 90:
        roman += "XC";
        input -= 90;
        break;

      case input >= 50:
        roman += "L";
        input -= 50;
        break;

      case input >= 40:
        roman += "XL";
        input -= 40;
        break;

      case input >= 10:
        roman += "X";
        input -= 10;
        break;

      case input >= 9:
        roman += "IX";
        input -= 9;
        break;

      case input >= 5:
        roman += "V";
        input -= 5;
        break;

      case input >= 4:
        roman += "IV";
        input -= 4;
        break;

      case input >= 1:
        roman += "I";
        input -= 1;
        break;
    }
  }
  return roman;
}

convertBtn.addEventListener('click', () => {
    const num = Number(numInput.value);
  if (num <= 0 || num > 3999) {
    result.textContent = "Enter a number between 1 and 3999";
    return;
  }
    result.textContent = convertToRoman(num);
});

