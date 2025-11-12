import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import MyProfile from "../Pages/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProfile from "../Pages/UpdateProfile";
import AlreadyLogInRoutes from "./AlreadyLogInRoutes";
import About from "../Pages/About";
import PublicHabits from "../Pages/PublicHabits";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
            },
            {
                path: "profile",
                element: <PrivateRoutes>
                    <MyProfile></MyProfile>
                </PrivateRoutes>,
            },
            {
                path: "login",
                element: <Login></Login>,
               
            },
            {
                path: "register",
                element:<Register></Register>,
              
            },
            {
                path: 'update',
                element: <PrivateRoutes>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoutes>
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "publicHabits",
                element:<PublicHabits></PublicHabits>,
            }

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])