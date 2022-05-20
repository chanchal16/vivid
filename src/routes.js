import { RequireAuth } from 'components/common/RequireAuth';
import { EditProfile } from 'features/profile/EditProfile';
import {Bookmarks, Feed, Login,Profile,SignUp} from './pages';

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
        children:[
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
            }
        ]
    }
]
export {ROUTES}