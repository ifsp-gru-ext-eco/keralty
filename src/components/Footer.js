import { BiLogoWhatsapp } from "react-icons/bi";
import keralty from '../images/keralty.png';
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

function Footer(){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <div className="flex flex-col ">
        <div className="flex lg:p-5 flex-col lg:flex-row bg-third items-center justify-evenly p-5">
            <div className="flex-1 flex-col flex items-center lg:flex-row justify-evenly">
                <div>
                    <h2 className="text-2xl text-white font-bold font-rubik">Navegue</h2>
                    <ul>
                        <li><a href="#home" className="text-1xl hover:text-fourth transition text-white font-rubik" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                        <li><a href="#about" className="text-1xl hover:text-fourth transition text-white font-rubik" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre nós</a></li>
                        <li><a href="#contact" className="text-1xl hover:text-fourth transition text-white font-rubik" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contatos</a></li>
                    </ul>
                </div>

                
            </div>
            <div className="flex-1 flex justify-evenly items-center mt-4 lg:mt-0 flex-col lg:flex-row">
                <div className="flex justify-center items-center">
                    <img alt="Icon keralty" src={keralty} className='w-auto'></img>
                </div>
                <div className="flex flex-col items-center justify-evenly">
                    <div className="flex items-center justify-center">
                        <a rel="noreferrer" target="_blank" href="https://wa.me/553172546734"><BiLogoWhatsapp className="text-green-100 hover:text-green-200 transition cursor-pointer" size={30} /></a>
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/associacaokeralty/"><BiLogoInstagram size={30} className="text-green-100 hover:text-[#e95950] transition cursor-pointer" /></a>
                        <a rel="noreferrer" target="_blank" href="mailto:associacao@keralty.com"><BiLogoGmail size={30} className="text-green-100 hover:text-red-800 transition cursor-pointer"/></a>
                    </div>
                    {/* <div className="mt-3">
                        <a rel="noreferrer" href="arrumar-aqui"><button className="border p-2 pr-8 pl-8 rounded-full border-primary text-white font-rubik cursor-pointer hover:bg-white hover:text-primary bg-primary transition">Conecte-se!</button></a>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="p-5 flex justify-center items-center bg-slate-900 text-white font-rubik text-center">
            <h3>© Associação Keralty - Todos os direitos Reservados</h3>

        </div>
        </div>
    )

}

export default Footer;