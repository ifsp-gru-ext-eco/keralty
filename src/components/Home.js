
import { useEffect } from "react";
import Cards from './Cards.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './About.js';
// import Testimonials from './Testimonials.js';
import Carousel from './Carousel.js';
import SignUp from "./Childrens/SignUp.js";
import ContactSection from './ContactSection.js';
import Initial from "./Childrens/Initial.js";
import CurrentCampaign from "./Childrens/CurrentCampaign.js";
import StepByStep from "./StepByStep.js";
function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex flex-col overflow-hidden'>
            <Carousel>
                    <Initial />
                    <SignUp />
                    <CurrentCampaign />
                </Carousel>
            <StepByStep/>
            <Cards />
            <About/>
            <ContactSection id="contact" />
        </div>
    );

}

export default Home;