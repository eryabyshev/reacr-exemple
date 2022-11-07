import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>, exact: false},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/*', element: <ErrorPage/>, exact: false}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: false},
    {path: '/*', element: <Login/>, exact: false},
]