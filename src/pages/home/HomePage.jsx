import React from 'react';
import Introduction from "./introduction/Introduction";
import WhyImportant from "./whyImportant/WhyImportant";
import BestChoice from "./bestChoice/BestChoice";
import Equipments from "./equipments/Equipments";
import Services from "./services/Services";
import ContactUs from "./contactUs/ContactUs";
import Discover from "./discover/Discover";
import Reviews from "./reviews/Reviews";
import Brands from "./brands/Brands";
import Offers from "./offers/Offers";
import Promises from "./promises/Promises";
import AboutUs from "./aboutUs/AboutUs";
import {Footer} from "@widgets/api";

const HomePage = () => {
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
            <AboutUs/>
        </main>
    );
};

export default HomePage;