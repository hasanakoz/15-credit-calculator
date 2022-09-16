const calculateButton = document.querySelector(".submit");

calculateButton.addEventListener("click", () => {
  const loan = document.querySelector("#loan-type");
  const loanType = loan.options[loan.selectedIndex].value;
  const loanAmount = Number(document.getElementById("loan-amount").value);
  const loanTerm = Number(document.getElementById("loan-term").value);
  const result = document.querySelector(".result");
  let x = 0;
  if (loanType == "housing") {
    x = 1.29 / 100;
  }
  if (loanType == "car") {
    x = 1.79 / 100;
  }
  if (loanType == "personal") {
    x = 1.99 / 100;
  }

  const installment =
    loanAmount * ((x * (1 + x) ** loanTerm) / ((1 + x) ** loanTerm - 1));
  result.textContent = `taksit: ${installment}`;
  console.log(installment, x, loanType, loanAmount, loanTerm);
});
