import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";
import MyReviews from "../Pages/MyReviews/MyReviews";
import MyServices from "../Pages/MyServices/MyServices";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import ErrorPage from "../Pages/Errorpage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: ()=>fetch('https://rate-pal-server.vercel.app/featuredservices'),
                element: <Home></Home>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                loader: ({params}) => fetch(`https://rate-pal-server.vercel.app/servicedetail?id=${params.id}`),
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path:'/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/myservices',
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            }
           
        ]
    }
]);


export default router