import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from '../home/home'
import About from '../about/about'
import ContactUs from '../contactUs/contactUs'
import Faq from '../faq/faq'
import OurWorks from '../ourWorks/ourWorks'
import Portfolio from '../portfolio/portfolio'
import Services from '../services/services'
import Testimonials from '../testimonials/testimonials'

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        // When coming from Contact Us link: go to home and scroll to contact section (so user can scroll up)
        const scrollToId = location.state?.scrollTo;
        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            return;
        }

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
            <OurWorks/>
            <Testimonials/>
            <Faq/>
            <ContactUs/>
        </>
    )
}

export default ScrollToSection;