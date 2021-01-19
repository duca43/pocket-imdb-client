import Login from "../containers/auth/Login"
import Register from "../containers/auth/Register"
import Home from "../containers/Home"
import MoviePage from "../containers/movies/MoviePage"

export const AUTHORIZED_ROUTES = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/movie/:id',
        component: MoviePage  
    }
]

export const NON_AUTHORIZED_ROUTES = [
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login  
    }
]