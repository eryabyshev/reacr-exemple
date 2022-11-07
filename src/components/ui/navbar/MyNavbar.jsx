import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const MyNavbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)
    const router = useNavigate()

    const logout = (event) => {
        event.preventDefault()
        setIsAuth(false)
        localStorage.removeItem('auth')
        router("/")
    }

    return (
        <div className="navbar">
            {isAuth
                ? <MyButton onClick={logout}>Log out</MyButton>
                : <div></div>
            }
            <div className='navbar_items'>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default MyNavbar;