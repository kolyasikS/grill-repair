import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Contacts from "../pages/contacts/Contacts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/contacts',
        element: <Contacts/>
    },
    {
        path: '*',
        element: <HomePage/>
    },
]);

export default router;















