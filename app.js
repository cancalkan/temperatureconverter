const celciusInput = document.querySelector('#celcius> input')
const fahrenheitInput = document.querySelector('#fahrenheit> input')
const kelvinInput = document.querySelector('#kelvin> input')

function roundnum(num){
    return Math.round(num*100)/100 ;
}

function celciusconvert () {
    const celciusTemp= parseFloat(celciusInput.value);
    const fahrenheitTemp= (celciusTemp * (1.8))+32;
    const kelvinTemp = (celciusTemp+273.15);
    fahrenheitInput.value = roundnum(fahrenheitTemp) ;
    kelvinInput.value = roundnum(kelvinTemp);
    
  }

  function fahrenheitconvert(){
      const fahrenheitTemp = parseFloat(fahrenheitInput.value);
      const celciusTemp = (fahrenheitTemp-32) /(1.8);
      const kelvinTemp = (fahrenheitTemp+459.67) / (1.8);
      celciusInput.value= roundnum(celciusTemp);
      kelvinInput.value= roundnum(kelvinTemp);

  }

  function kelvinconvert(){
      const kelvinTemp= parseFloat(kelvinInput.value);
      const celciusTemp = kelvinTemp-273.15;
      const fahrenheitTemp = 1.8*(kelvinTemp-273)+32 ;
      celciusInput.value = roundnum(celciusTemp);
      fahrenheitInput.value = roundnum(fahrenheitTemp);

}
  function main(){
    celciusInput.addEventListener('input',celciusconvert);
    fahrenheitInput.addEventListener('input',fahrenheitconvert);
    kelvinInput.addEventListener('input', kelvinconvert);

  }
  main();
