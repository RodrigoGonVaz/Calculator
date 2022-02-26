console.log("Mexaverse");

//DOM
const numberBtnC = document.querySelector(".cContainer");
const numberBtnArrow = document.querySelector(".arrowContainer");
const symbolBtnEqual = document.querySelector(".equalContainer");
const numberBtn = document.querySelectorAll(".number");
const symbolBtn = document.querySelectorAll(".symbol");
const calculo = document.querySelector(".calculo");
const calculoNuevo = document.querySelector(".calculoNuevo");
const maxNum = document.querySelector(".maxNum");

function calculadora() {
  let clickSymbol = true;
  let clickEqual = false;
  let clickNumbers = true;
  let clickBorrar = true;
  let result;

  //------------Funcion para los numeros-----------------//
  numberBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (clickNumbers && "click") {
        clickSymbol = false;
        clickEqual = true;
        clickBorrar = true;
        parseInt(event.target.innerText);
        calculoNuevo.innerText += event.target.innerText;
      } else {
        console.log("error");
      }
      if (calculoNuevo.innerText.length > 15) {
        clickNumbers = false;
        maxNum.innerText = "Maximo de numeros. No piques mas 😆";
      }
    });
  });

  //------------Funcion para los symbols (/*-+)-----------------//
  symbolBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (!clickSymbol && "click") {
        clickSymbol = true;
        clickEqual = false;
        clickNumbers = true;
        clickBorrar = true;
        maxNum.innerText = "";
        if (event.target.innerText === "x") {
          calculoNuevo.innerText += "*";
        } else {
          calculoNuevo.innerText += event.target.innerText;
        }
      }
    });
  });
  //------------Funcion para el igual o resultado (=)-----------------//
  symbolBtnEqual.addEventListener("click", (event) => {
    if (clickEqual && "click") {
      clickEqual = false;
      clickNumbers = false;
      clickBorrar = false;
      maxNum.innerText = "";
      result = eval(calculoNuevo.innerText); // "4-5" --> 4-5 = -1
      console.log(eval(calculoNuevo.innerText));
      calculoNuevo.innerText = result;
      calculo.innerText = result;
    }
  });

  //------------Funcion para Eliminar resultado-----------------//
  numberBtnC.addEventListener("click", (event) => {
    clickNumbers = true;
    maxNum.innerText = "";
    calculoNuevo.innerText = "";
    calculo.innerText = 0;
  });

  //------------Funcion para borrar uno a uno-----------------//
  numberBtnArrow.addEventListener("click", (event) => {
    maxNum.innerText = "";
    if (clickBorrar) {
      clickSymbol = false;
      clickNumbers = true;
      let newCalculoNuevo = calculoNuevo.innerText.substring(
        0,
        calculoNuevo.innerText.length - 1
      );
      calculoNuevo.innerText = newCalculoNuevo;
    }
  });
}

calculadora(); //Invocar funcion

// let algo = "5+5+5*2";
// let result = eval(algo);
// let men = "";
// let yess = "5+5+5*2" - "";
// console.log(yess, typeof result);

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
