import { RequireAuth } from 'components/common/RequireAuth';
import { EditProfile } from 'features/profile/EditProfile';
import {Bookmarks, Feed, Profile,PostPage,Login,SignUp, Explore, PageNotFound} from './pages';
import Mockman from 'mockman-js';

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
                path:'profile/:username',
                element:<Profile/>
            },
            {
                path:'profile/edit',
                element:<EditProfile/>
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
    },
    {
        path:'*',
        element:<PageNotFound/>
    },
    {
        path:'mock',
        element:<Mockman/>
    }
]
export {ROUTES}