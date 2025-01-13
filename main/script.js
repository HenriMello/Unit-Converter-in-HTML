function convert(){
    const inputValue = document.getElementById('userInput').value;
    const unit = document.getElementById("unit").value;
    const milesToKm = unit === 'milesToKm';
    const resultElement = document.getElementById('resultElement');
  
    let result = 0;
  
    if (milesToKm === true){
      result = inputValue * 1.60934;
    } else{
      result = inputValue / 1.60934;
    }
    const resultString = inputValue + " milhas são " + result + " km";
    console.log(resultString);
    resultElement.innerHTML = resultString;
  }