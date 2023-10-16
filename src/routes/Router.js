import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Contacts from "../pages/contacts/Contacts";
import OrderPage from "../pages/order/OrderPage";

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
        path: '/order',
        element: <OrderPage/>
    },
    {
        path: '*',
        element: <HomePage/>
    },
]);

export default router;















