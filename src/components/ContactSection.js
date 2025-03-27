import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";

function ContactSection() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='contact' className="w-full flex flex-col items-center">
            <div className="w-full bg-white text-center py-10 px-6">
                <h1 className="text-4xl font-bold text-gray-800">Quer <span className="text-blue-500">entrar em contato?</span></h1>
                <p className="text-lg text-gray-600 mt-2">Entre em contato conosco por uma das opções abaixo:</p>
            </div>

            <div className="w-full bg-gray-100 flex flex-wrap justify-center py-10 gap-8">
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl w-64" data-aos="fade-up" data-aos-delay="100">
                    <MdOutlineEmail size={40} className="text-blue-400" />
                    <h2 className="text-xl font-semibold text-blue-600 mt-3">E-mail</h2>
                    <a href="mailto:associacao@keralty.com" rel="noreferrer" target="_blank" className="text-gray-700 font-bold hover:text-blue-400 mt-2">associacao@keralty.com</a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl w-64" data-aos="fade-up" data-aos-delay="200">
                    <BsTelephone size={30} className="text-blue-400" />
                    <h2 className="text-xl font-semibold text-blue-600 mt-3">Telefone</h2>
                    <a href="tel:+553172546734" rel="noreferrer" className="text-gray-700 font-bold hover:text-blue-400 mt-2">(31) 7254-6734</a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl w-64" data-aos="fade-up" data-aos-delay="300">
                    <RiWhatsappFill size={30} className="text-green-500" />
                    <h2 className="text-xl font-semibold text-blue-600 mt-3">WhatsApp</h2>
                    <a href="https://wa.me/553172546734" rel="noreferrer" target="_blank" className="text-gray-700 font-bold hover:text-blue-400 mt-2">Clique aqui</a>
                </div>
                
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl w-64" data-aos="fade-up" data-aos-delay="400">
                    <FaInstagram size={30} className="text-pink-500" />
                    <h2 className="text-xl font-semibold text-blue-600 mt-3">Instagram</h2>
                    <a href="https://www.instagram.com/associacaokeralty/" rel="noreferrer" target="_blank" className="text-gray-700 font-bold hover:text-blue-400 mt-2">@associacaokeralty</a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;