import React, {useContext} from 'react';
import MyInput from "../components/ui/input/MyInput";
import MyButton from "../components/ui/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const router = useNavigate()

    const submit = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        router("/posts")
    }


    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={submit}>
                <MyInput type='text' placeholder='login'/>
                <MyInput type='password' placeholder='password'/>
                <MyButton>Login</MyButton>
            </form>

        </div>
    );
};

export default Login;