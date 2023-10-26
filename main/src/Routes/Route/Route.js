import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignUp/Signup";
import About from "../../Pages/About/About";
import Food from "../../Pages/Foods/Food";
import Inventory from "../../Pages/Inventory/Inventory";
import User from "../../Pages/User/User";
import Blogs from "../../Pages/Blog/Blogs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/food',
                element: <Food></Food>
            }
            ,
            {
                path: '/inventory',
                element: <Inventory></Inventory>
            }
            ,
            {
                path: '/user',
                element: <User></User>
            }
            ,
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;