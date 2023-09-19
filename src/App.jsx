import React from "react";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Experience } from "./components/experience/Experience";
import { Contacts } from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";
import { Portfolio } from "./components/portfolio/Portfolio";

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            {/* <Services/> */}
            <Portfolio />
            <Contacts/>
            <Footer/>
        </>
    );
}

export {App}