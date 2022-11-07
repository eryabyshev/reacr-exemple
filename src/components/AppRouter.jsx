import React, {useContext} from 'react';
import MyNavbar from "./ui/navbar/MyNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./ui/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader></Loader>
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route =>
                        <Route
                            key = {route.path}
                            element={route.element}
                            path={route.path}
                            exact={route.exact}
                        />
                    )
                : publicRoutes.map(route =>
                        <Route
                            key = {route.path}
                            element={route.element}
                            path={route.path}
                            exact={route.exact}
                        />
                    )
            }
        </Routes>
    );
};

export default AppRouter;