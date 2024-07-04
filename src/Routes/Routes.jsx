import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home";

import About from "../components/About";
import Contact from "../components/Contat"

import CoffeeDetails from "../components/CoffeeDetails";
// import Card from "../components/Card";


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
            // {
            //     path: '/donner/:userId',
            //     element: <CardDetails></CardDetails>,
            // },
            {
                path: 'coffee/:_id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params._id}`)
            }
            // {
            //     path: '/coffee/:id',
            //     element: <Card></Card>,
            //     loader: () => fetch('http://localhost:5000/coffee')
            // },
        ]
        
    },


  
]);

export default router;