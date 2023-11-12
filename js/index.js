const calculateBtn = document.querySelector("#calculate-btn");
const result = document.querySelector("#display-result")


function calculate() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;

  if(weight === "" || height === "") {
    return "insira os valores"
  }
  let result = (weight / (height * height)).toFixed(2)
  // weight / ( height * height )
  if (result < 18.5) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">baixo do peso</p>`;
  } else if (result < 24.9) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">Peso normal</p>`;
  } else if (result < 29.9) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">Sobrepeso</p>`;
  } else if (result < 34.9) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">Obesidade grau I</p>`;
  } else if (result < 39.9) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">Obesidade grau II</p>`;
  } else if (result >= 40) {
    return `<p id="result">Seu IMC é ${result}</p> <p id="result">Obesidade grau III</p>`;
  } 
    
}

calculateBtn.addEventListener("click", () => {
  result.innerHTML = calculate();
} )