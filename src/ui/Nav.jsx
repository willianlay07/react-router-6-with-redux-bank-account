import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const account   = useSelector(store => store.account);

  return (
    <div>
        <ul style={{ listStyleType: "none", display: "flex", paddingLeft: "0px" }}>
            <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <NavLink to="/about">About</NavLink>
            </li>
            <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            {account.isAuth ? (
                <>
                    <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <NavLink to="/auth/profile">Profile</NavLink>
                    </li>
                    <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <NavLink to="/auth/bank">Bank</NavLink>
                    </li>
                </>
            ) : (
                <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                    <NavLink to="/auth/login">Log In</NavLink>
                </li>
            )}
            
        </ul>
    </div>
  )
}

export default Nav