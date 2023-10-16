import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddNew from "../pages/AddNew/AddNew";
import UpdateExisting from "../pages/UpdateExisting/UpdateExisting";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee'),
            },
            {
                path: "/addNew",
                element: <AddNew />,
            },
            {
                path: "/updateExisting",
                element: <UpdateExisting />,
            },
            {
                path: "/coffeeDetails",
                element: <CoffeeDetails />,
            },
        ]
    }
]);

export default router;