import React, { useState } from "react";
import "../Style/EMI.css";

function EMI() {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState("");

  const handleCalculate = () => {
    if (!loanAmount || !months) return;
    const principal = parseFloat(loanAmount);
    const rate = 9.5 / 12 / 100;
    const emiValue = (
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1)
    ).toFixed(2);
    setEmi(emiValue);
  };

  const handleReset = () => {
    setModel("");
    setPrice("");
    setDownPayment("");
    setLoanAmount("");
    setMonths("");
    setEmi("");
  };

  const handleDownPaymentChange = (value) => {
    setDownPayment(value);
    const updatedLoanAmount = price ? price - value : "";
    setLoanAmount(updatedLoanAmount);
  };

  return (
    <div className="emi-wrapper">
      <h2 className="emi-title">EMI CALCULATOR</h2>
      <div className="emi-form">
        <div className="left-side">
          <label>SELECT MODEL</label>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option>----------------SELECT MODEL----------------</option>
            <option value="Activa">Activa</option>
            <option value="Dio">Dio</option>
            <option value="Shine">Shine</option>
          </select>

          <label>VEHICLE PRICE</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            placeholder="Enter Vehicle Price"
          />

          <div className="input-row">
            <div>
              <label>DOWN PAYMENT</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) =>
                  handleDownPaymentChange(parseFloat(e.target.value))
                }
                placeholder="Enter Down Payment"
              />
            </div>
            <div>
              <label>LOAN AMOUNT</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                placeholder="Loan Amount"
              />
            </div>
          </div>

          <label>SELECT MONTHS</label>
          <select value={months} onChange={(e) => setMonths(e.target.value)}>
            <option>----------------SELECT MONTHS----------------</option>
            <option value="12">12 Months</option>
            <option value="24">24 Months</option>
            <option value="36">36 Months</option>
            <option value="48">48 Months</option>
            <option value="60">60 Months</option>
          </select>

          <div className="button-group">
            <button onClick={handleCalculate}>CALCULATE</button>
            <button onClick={handleReset}>RESET</button>
          </div>

          <p className="terms">*TERMS & CONDITIONS APPLY</p>
        </div>

        <div className="right-side">
          <label>*EMI (PER MONTH) Rs.</label>
          <input type="text" value={emi} readOnly />
        </div>
      </div>
    </div>
  );
}

export default EMI;
