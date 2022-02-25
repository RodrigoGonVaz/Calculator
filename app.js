console.log("pruebaaaaa");

//DOM
const numberBtnC = document.querySelector(".cContainer");
const numberBtnArrow = document.querySelector(".arrowContainer");
const symbolBtnEqual = document.querySelector(".equalContainer");
const numberBtn = document.querySelectorAll(".number");
const symbolBtn = document.querySelectorAll(".symbol");
const calculo = document.querySelector(".calculo");
const calculoNuevo = document.querySelector(".calculoNuevo");
const todos = document.querySelector(".allbtns");



//callback Function

function calculadora() {
  let clickSymbol = true;
  let clickEqual = true
  let result
  
  numberBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      //parseInt(calculoNuevo.innerText)
      if (clickEqual && "click") {
        clickSymbol = false;
        parseInt(event.target.innerText)
        calculoNuevo.innerText += event.target.innerText
        let tipoNumero = parseInt(calculoNuevo.innerText) //para ver en consola sin funcion
        console.log(tipoNumero)
      } else {
        console.log('error')
      }
    });
  });

  
  symbolBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.innerText === 'x') {
        event.target.innerText = '*'
      }
      if (!clickSymbol && "click") {
        clickSymbol = true;
        calculoNuevo.innerText += event.target.innerText;
      }
    });
  });

  symbolBtnEqual.addEventListener("click", (event) => {
    result = eval(calculoNuevo.innerText) // "4-5" --> 4-5 = -1
    console.log(eval(calculoNuevo.innerText))
    calculoNuevo.innerText = result
    calculo.innerText = result
  })

}
calculadora(); //Invocar funcion


let algo  = "5+5+5*2"
let result = eval(algo)
console.log(result, typeof result)


// numberBtn.addEventListener('click', function() {
//     console.log('Number')
// })
// numberBtnPlus.addEventListener('click', function() {
//     console.log('+')
// })
// numberBtn7.addEventListener('click', function() {
//     console.log('siiiiii me hacckeratron')
// })
// numberBtn6.addEventListener('click', function() {
//     console.log('6')
// })
// numberBtn5.addEventListener('click', function() {
//     console.log('5')
// })
// numberBtn4.addEventListener('click', function() {
//     console.log('4')
// })
// const numberBtn9 = document.querySelector(".nineContainer");
// const numberBtn8 = document.querySelector(".eightContainer");
// const numberBtn7 = document.querySelector(".sevenContainer");
// const numberBtn6 = document.querySelector(".sixContainer");
// const numberBtn5 = document.querySelector(".fiveContainer");
// const numberBtn4 = document.querySelector(".fourContainer");
// const numberBtn3 = document.querySelector(".treeContainer");
// const numberBtn2 = document.querySelector(".twoContainer");
// const numberBtn1 = document.querySelector(".oneContainer");
// const numberBtn0 = document.querySelector(".zeroContainer");