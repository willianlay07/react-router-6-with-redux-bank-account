import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logout } from "./accountSlice";

const Profile = () => {
    const navigate  = useNavigate();
    const account   = useSelector(store => store.account);
    const dispatch  = useDispatch();

    useEffect(() => {
        if(!account.isAuth) {
            navigate("/auth/login", {
                replace: true
            })
        }
    }, [account.isAuth, navigate])

    function handleLogout() {
        dispatch(logout());
    }

    if(!account.isAuth) return null;

  return (
    <div>
        <h1>Welcome: {account.user.name}</h1>
        <p style={{ marginTop: "-10px" }}>Email: {account.user.email}</p>
        <img src={`${account.user.avatar}`} style={{ borderRadius: "10px" }} />
        <br /><br />
        <button onClick={() => handleLogout()}>Log Out</button>
    </div>
  )
}

export default Profile