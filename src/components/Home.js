
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
function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex flex-col overflow-hidden'>
            <Carousel>
                    <Initial />
                    <SignUp />
                    
                    <div className="bg-blue-500 h-home flex items-center justify-center text-white text-4xl">Slide 3</div>
                </Carousel>

            <Cards />
            <About id="about" />
            <ContactSection id="contact" />
        </div>
    );

}

export default Home;