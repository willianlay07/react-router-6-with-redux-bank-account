import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";


const AccountOperation = () => {
    const [depositAmount, setDepositAmount]         = useState("");
    const [withdrawalAmount, setWithdrawalAmount]   = useState("");
    const [currency, setCurrency]                   = useState("USD");
    const [loanAmount, setLoanAmount]               = useState("");
    const [purpose, setPurpose]                     = useState("");
    const dispatch                                  = useDispatch();

    const { isLoading, loan, loanPurpose, balance }          = useSelector(store => store.account);
    
    function handleDeposit() {
        dispatch(deposit(depositAmount, currency));
        setDepositAmount("");
        setCurrency("USD");
    }

    function handleWithdrawal() {
        if(balance >= withdrawalAmount) {
            dispatch(withdraw(withdrawalAmount));
            setWithdrawalAmount("");
        } else {
            alert("Not enough money to withdraw!")
        }
    }

    function handleRequestLoan() {
        dispatch(requestLoan(loanAmount, purpose));
        setLoanAmount("");
        setPurpose("");
    }

    function handlePayLoan() {
        dispatch(payLoan());
    }


    return (
        <div>
          <h2>Your account operations</h2>
          <div className="inputs">
            <div>
              <label>Deposit</label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(+e.target.value)}
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="SGD">SGD Dollar</option>
              </select>
    
              <button onClick={handleDeposit} disabled={isLoading}>
                {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
              </button>
            </div>
    
            <div>
              <label>Withdraw</label>
              <input
                type="number"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(+e.target.value)}
              />
              <button onClick={handleWithdrawal}>
                Withdraw {withdrawalAmount}
              </button>
            </div>
    
            {loan > 0 ? (
                <div>
                    <span>
                    Pay back ${loan} ({loanPurpose})
                    </span>
                   {` `}<button onClick={handlePayLoan}>Pay loan</button>
                </div>
            ) : (
                <div>
                    <label>Request loan</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(+e.target.value)}
                        placeholder="Loan amount"
                    />
                    <input
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        placeholder="Loan purpose"
                    />
                    <button onClick={handleRequestLoan}>Request loan</button>
                </div>
            )}
          </div>
        </div>
      );
}

export default AccountOperation