import '@assets/styles/global.css';
import Introduction from "./pages/home/introduction/Introduction";
import {Container} from "@mui/material";
import WhyImportant from "./pages/home/whyImportant/WhyImportant";
import BestChoice from "./pages/home/bestChoice/BestChoice";
import Equipments from "./pages/home/equipments/Equipments";
import Services from "./pages/home/services/Services";
import ContactUs from "./pages/home/contactUs/ContactUs";
import Discover from "./pages/home/discover/Discover";
import Reviews from "./pages/home/reviews/Reviews";
import Brands from "./pages/home/brands/Brands";
import Offers from "./pages/home/offers/Offers";
import Promises from "./pages/home/promises/Promises";

function App() {
    return (
        <main>
            <Introduction/>
            <WhyImportant/>
            <BestChoice/>
            <Equipments/>
            <Services/>
            <ContactUs/>
            <Discover/>
            <Reviews/>
            <Brands/>
            <Offers/>
            <Promises/>
            <div className={'h-[1000px]'}></div>
        </main>
    );
}

export default App;
