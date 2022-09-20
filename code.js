const calculateButton = document.querySelector(".submit");
const loanType = document.querySelector("#loan-type");

const loanAmount = document.getElementById("loan-amount");
const loanTerm = document.getElementById("loan-term");
let installment = 0;
let rate = 0;
const result = document.querySelector(".result");

calculateButton.addEventListener("click", () => {
  if (
    !loanType.value ||
    !loanTerm.value ||
    !loanAmount.value ||
    loanType.value == "choose"
  ) {
    alert("Please enter all the necessary info in the form!");
  } else {
    if (loanType.value == "housing") {
      rate = 1.29 / 100;
    } else if (loanType.value == "car") {
      rate = 1.79 / 100;
    } else if (loanType.value == "personal") {
      rate = 1.99 / 100;
    }
  }

  installment =
    loanAmount.value *
    ((rate * (1 + rate) ** loanTerm.value) /
      ((1 + rate) ** loanTerm.value - 1));

  displayTable();
  loanType.value = "";
  loanTerm.value = "";
  loanAmount.value = "";

  // result.textContent = `taksit: ${installment}`;
  // console.log(installment, x, loanType, loanAmount, loanTerm);
});

const displayTable = () => {
  result.innerHTML = `
  <h2 > Credit Info </h2>
  <table>
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
