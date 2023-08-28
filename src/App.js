import '@assets/styles/global.css';
import Home from "./pages/home/Home";
import {Container} from "@mui/material";

function App() {
    return (
        <main>
            <Container maxWidth={'lg'}>
                <Home/>
                <div className={'h-[100px]'}></div>
            </Container>
        </main>
    );
}

export default App;
