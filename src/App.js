import './App.css';
import Home from "./pages/home/Home";
import {Container} from "@mui/material";

function App() {
    return (
        <main>
            <Container maxWidth={'lg'}>
                <Home/>
            </Container>
        </main>
    );
}

export default App;
