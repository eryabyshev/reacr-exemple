import React, {useEffect, useState} from 'react';
import './styles/App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import MyNavbar from "./components/ui/navbar/MyNavbar";
import {SwitchTransition} from "react-transition-group";
import ErrorPage from "./pages/ErrorPage";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])

    return (
        <div>
            <AuthContext.Provider value={{
                isAuth: isAuth,
                setIsAuth: setIsAuth,
                isLoading: isLoading,
            }}>
                <BrowserRouter>
                    <MyNavbar></MyNavbar>
                    <AppRouter></AppRouter>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
