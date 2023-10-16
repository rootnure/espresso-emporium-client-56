import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddNew from "../pages/AddNew/AddNew";
import UpdateExisting from "../pages/UpdateExisting/UpdateExisting";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addNew",
                element: <AddNew />,
            },
            {
                path: "/updateExisting",
                element: <UpdateExisting />,
            },
        ]
    }
]);

export default router;