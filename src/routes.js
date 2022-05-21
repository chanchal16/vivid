import { RequireAuth } from 'components/common/RequireAuth';
import {Bookmarks, Feed, PostPage,Login,SignUp, Explore} from './pages';

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
        element:<RequireAuth/>,
        children:[
            {
                path:'/',
                element:<Feed/>
            },
            {
                path:'bookmarks',
                element:<Bookmarks/>
            },
            {
                path:'/posts/:postId',
                element:<PostPage/>
            },
            {
                path:'explore',
                element:<Explore/>
            }
        ]
    }
]
export {ROUTES}