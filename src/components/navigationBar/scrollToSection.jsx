import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from '../home/home'
import About from '../about/about'
import ContactUs from '../contactUs/contactUs'
import Faq from '../faq/faq'
import Gallery from '../gallery/gallery'
import HowWeWork from '../howWeWork/homeWeWork'
import Portfolio from '../portfolio/portfolio'
import Services from '../services/services'
import Testimonials from '../testimonials/testimonials'

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.replace("/","");

        if(!path){
            window.scrollTo({top:0,behavior: "smooth"});
            return;
        }

        const element = document.getElementById(path);

        if(element){
            element.scrollIntoView({behavior:"smooth"});
        }

    },[location]);

    return(
        <>
            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <HowWeWork/>
            <Gallery/>
            <Testimonials/>
            <Faq/>
            <ContactUs/>
        </>
    )
}

export default ScrollToSection;