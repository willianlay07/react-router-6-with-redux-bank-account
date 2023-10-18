import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import AccountOperation from "./AccountOperation";

const Bank = () => {
  const navigate  = useNavigate();
  const account   = useSelector(store => store.account);

  useEffect(() => {
    if(!account.isAuth) {
        navigate("/auth/login", {
            replace: true
        })
    }
}, [account.isAuth, navigate]);

if(!account.isAuth) return null;

  return (
    <div>
        <h1>Welcome to Bank: {account.user.name}</h1>
        <div className="balance">{formatCurrency(account.balance)}</div>
        <AccountOperation />
    </div>
  )
}

export default Bank

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
