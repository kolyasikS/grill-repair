import '@assets/styles/global.css';
import Introduction from "./pages/home/introduction/Introduction";
import {Container} from "@mui/material";
import WhyImportant from "./pages/home/whyImportant/WhyImportant";
import BestChoice from "./pages/home/bestChoice/BestChoice";
import Equipments from "./pages/home/equipments/Equipments";
import Services from "./pages/home/services/Services";

function App() {
    return (
        <main>
            <Introduction/>
            <WhyImportant/>
            <BestChoice/>
            <Equipments/>
            <Services/>
            <div className={'h-[1000px]'}></div>
        </main>
    );
}

export default App;
