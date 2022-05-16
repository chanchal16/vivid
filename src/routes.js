import { RequireAuth } from 'components/common/RequireAuth';
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
    },
    {
        path:'/',
        element:<RequireAuth/>,
        children:[]
    }
]
export {ROUTES}