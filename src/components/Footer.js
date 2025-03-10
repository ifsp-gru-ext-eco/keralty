import { BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";
import keralty from '../images/keralty.png';
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";

function Footer(){

    return(
        <div className="flex lg:p-5 flex-col lg:flex-row bg-third items-center justify-evenly p-5">
            <div className="flex-1 flex-col flex items-center lg:flex-row justify-evenly">
                <div>
                    <h2 className="text-2xl text-white font-bold font-rubik">Navegue</h2>
                    <ul>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Home</Link></li>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Sobre nós</Link></li>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Contatos</Link></li>
                    </ul>
                </div>

                <div className="mt-4 lg:mt-0">
                    <h2 className="text-2xl text-white font-bold font-rubik">Causas</h2>
                    <ul>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Políticas Públicas</Link></li>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Cidadania</Link></li>
                        <li><Link to="" className="text-1xl hover:text-fourth transition text-white font-rubik">Saúde e bem-estar</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 flex justify-evenly items-center mt-4 lg:mt-0 flex-col lg:flex-row">
                <div className="flex justify-center items-center">
                    <img alt="Icon keralty" src={keralty} className='w-auto'></img>
                </div>
                <div className="flex flex-col items-center justify-evenly">
                    <div className="flex items-center justify-center">
                        <BiLogoWhatsapp className="text-green-100 hover:text-green-200 transition cursor-pointer" size={30} />
                        <BiLogoInstagram size={30} className="text-green-100 hover:text-[#e95950] transition cursor-pointer" />
                        <BiLogoGmail size={30} className="text-green-100 hover:text-red-800 transition cursor-pointer"/>
                    </div>
                    <div className="mt-3">
                        <a href="arrumar-aqui"><button className="border p-2 pr-8 pl-8 rounded-full border-primary text-white font-rubik cursor-pointer hover:bg-white hover:text-primary bg-primary transition">Conecte-se!</button></a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;