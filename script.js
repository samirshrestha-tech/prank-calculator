const allbtns = [...document.getElementsByClassName("btn")];
// console.log(allbtns);
let strToDisplay = "";
const displaElm = document.querySelector(".display");
// console.log(displaElm);
const operators = ["*", "/", "+", "-", "%"];
const decimal = document.querySelector(".btn-dot");
// decimal.addEventListener("click", () => {
//   const dec = decimal.innerText;
//   if (dec.includes(".") || btn.innerText.includes(".")) {
//     dec.disabled = true;
//   } else {
//     dec.disabled = false;
//   }
// });
// console.log(decimal);
let decimalCount = 0;

allbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(allbtns);
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
    }
    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);

      return display(strToDisplay);
    }
    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }
    if (val === ".") {
      decimalCount++;
    }

    if (val === "." && decimalCount > 1) {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar) && decimalCount === 1) {
        decimalCount++;
      }
      return;
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displaElm.innerText = str || "0.00";
};
const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  // strToDisplay = ttl.toString();
};
