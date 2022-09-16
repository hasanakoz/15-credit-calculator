let calculateButton = document.querySelector(".submit");
let loan = document.querySelector("#loan-type");
let loanType = loan.options[loan.selectedIndex].value;
let loanAmount = Number(document.getElementById("loan-amount").value);
let loanTerm = Number(document.getElementById("loan-term").value);
let result = document.querySelector(".result");
let x = 0;
if (loanType == "housing") {
  x = 1.29 / 100;
} else if (loanType == "car") {
  x = 1.79 / 100;
} else if (loanType == "personal") {
  x = 1.99 / 100;
}

let installment =
  loanAmount * ((x * (1 + x) ** loanTerm) / ((1 + x) ** loanTerm - 1));

calculateButton.addEventListener("click", () => {
  (result.textContent = "taksit: "), installment;
  console.log(installment, x, loanType, loanAmount, loanTerm);
});
