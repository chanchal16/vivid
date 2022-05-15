import {Feed, Login,SignUp} from './pages';

const ROUTES = [
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:'/',
        element:<Feed/>
    }
]
export {ROUTES}