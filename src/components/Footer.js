import { BiLogoWhatsapp } from "react-icons/bi";
import { Link } from "react-router-dom";
import keralty from '../images/keralty.png';
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
            <div className="flex-1 mt-4 lg:mt-0">
                <div className="flex justify-center items-center">
                    <img alt="Icon keralty" src={keralty} className='w-auto'></img>
                </div>
                <div className="flex ">
                    <div className="flex items-center justify-center">
                        <BiLogoWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;