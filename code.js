const calculateButton = document.querySelector(".submit");
const loanType = document.querySelector("#loan-type");

const loanAmount = document.getElementById("loan-amount");
const loanTerm = document.getElementById("loan-term");
let installment = 0;
let rate = 0;

calculateButton.addEventListener("click", () => {
  if (loanType.value == "housing") {
    rate = 1.29 / 100;
  }
  if (loanType.value == "car") {
    rate = 1.79 / 100;
  }
  if (loanType.value == "personal") {
    rate = 1.99 / 100;
  }

  if (!loanType.value || !loanTerm.value || !loanAmount.value) {
    alert("Please enter all the necessary info in the form!");
  }
  installment =
    loanAmount.value *
    ((rate * (1 + rate) ** loanTerm.value) /
      ((1 + rate) ** loanTerm.value - 1));

  displayTable();
  // result.textContent = `taksit: ${installment}`;
  // console.log(installment, x, loanType, loanAmount, loanTerm);
});

const displayTable = () => {
  const result = document.querySelector(".result");

  result.innerHTML = `
  <h2 > Credit Info </h2>
  <table class=>
      <tbody>
          <tr>
              <th>Loan Amount</th>
              <td>${loanAmount.value} </td>
              <th>Loan Type</th>
              <td>${loanType.value}</td>
          </tr>
          <tr>
              <th>Loan Term</th>
              <td>${loanTerm.value} Months</td>
              <th>Interest Rate</th>
              <td>% ${rate * 100}</td>
          </tr>
          <tr>
              <th>Total Amount</th>
              <td>${(installment * loanTerm.value).toFixed(2)} </td>
              <th>Installment</th>
              <td>${installment.toFixed(2)}</td>
          </tr>
      </tbody>
  </table>
`;
};
