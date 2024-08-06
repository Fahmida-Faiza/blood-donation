import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";
import PrivateRoute from "../Routes/PrivateRoute"
import About from "../components/About";
import Contact from "../components/Contact"
import Login from "../components/Login"
import CoffeeDetails from "../components/CoffeeDetails";
import SignUp from "../components/SignUp";
import Form from "../components/Form";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/coffee")
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            {
                path: 'coffee/:_id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params._id}`)
            },
            {
                path: '/form',
                element: <Form></Form>
                
            }

        ]
        
    },


  
]);

export default router;