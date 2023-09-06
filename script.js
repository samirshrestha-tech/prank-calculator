const allbtns = [...document.getElementsByClassName("btn")];
// console.log(allbtns);
let strToDisplay = "";
const displaElm = document.querySelector(".display");
const 

allbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(allbtns);
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
    }
    if (val === "C") {
      const str = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }
    if (val=== "="){
        return total();
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displaElm.innerText = str || "0.00";
};
const total =()=>{
    const ttl= eval(strToDisplay);
  display(ttl);
  
}
