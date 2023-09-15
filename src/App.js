import '@assets/styles/global.css';
import {RouterProvider} from "react-router-dom";
import router from "./routes/Router";
import {Footer, Header} from "@widgets/api";

function App() {
    return (
        <>
            <Header/>
            <RouterProvider router={router}>
            </RouterProvider>
            <Footer/>
        </>
    );
}

export default App;
