import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { login } from "./accountSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail]         = useState("jack@example.com");
  const [password, setPassword]   = useState("qwerty");

  const account   = useSelector(store => store.account);
  const dispatch  = useDispatch();
  const navigate  = useNavigate();
  
  useEffect(() => {
    if(account.isAuth) {
      navigate("/auth/profile", {
        replace: true
      });
    }
  }, [account.isAuth, navigate]);

  function handleForm(e) {
    e.preventDefault();

    dispatch(login(email, password));
    navigate("/auth/profile", {
      replace: true
    });
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleForm}>
        <label>Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login