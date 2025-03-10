import { Link } from "react-router-dom";
import logo from '../images/logo-keralty.png';

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md flex justify-center h-20">
            <div className="container hidden lg:flex justify-evenly items-center px-6 py-4">
                
                {/* Logo no canto esquerdo */}
                <div className="w-[220px] ml-4">
                    <img data-aos="fade-right" data-aos-duration="1000" alt="Logo Keralty" src={logo} />
                </div>

                {/* Menu Centralizado com mais espaço entre os links */}
                <div className="flex justify-center items-center">
                    <div className="flex justify-evenly font-rubik w-full max-w-lg p-3 min-w-[500px] rounded-full items-center border-[2px] border-second gap-10">
                        <Link
                            to="/"
                            className="text-2xl hover:text-primary transition ease-in-out text-second"
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            className="text-2xl hover:text-primary transition ease-in-out text-second"
                        >
                            Sobre nós
                        </Link>
                        <Link
                            to="/"
                            className="text-2xl hover:text-primary transition ease-in-out text-second"
                        >
                            Contatos
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
