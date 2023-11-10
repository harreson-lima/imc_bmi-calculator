const calculateBtn = document.querySelector("#calculate-btn");
const result = document.querySelector(".result")


function calculate() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  let result = (weight / (height * height)).toFixed(2)
  // weight / ( height * height )
  if (result < 18.5) {
    return `Seu IMC é ${result}, baixo do peso`;
  } else if (result < 24.9) {
    return `Seu IMC é ${result}, Peso normal`;
  } else if (result < 29.9) {
    return `Seu IMC é ${result}, Sobrepeso`;
  } else if (result < 34.9) {
    return `Seu IMC é ${result}, Obesidade grau I`;
  } else if (result < 39.9) {
    return `Seu IMC é ${result}, Obesidade grau II`;
  } else if (result >= 40) {
    return `Seu IMC é ${result}, Obesidade grau III`;
  } 
    
}

calculateBtn.addEventListener("click", () => {
  result.innerHTML = calculate();
} )