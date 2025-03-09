import { Link } from "react-router-dom";


function Header(){
        return (
            <div className="flex items-center justify-center top-0 bg-white z-10 ">
              <div className="container hidden lg:block">
                <div className="flex justify-center items-center p-2">
                  
                  <div className="flex justify-evenly font-rubik w-full max-w-lg mx-auto p-2 rounded-full items-center border-[2px] border-second ">
                    <Link
                      to="/"
                      className="text-2xl hover:text-primary transition ease-in-out text-second "
                    >
                      Home
                    </Link>
                    <Link
                      to="/"
                      className="text-2xl hover:text-primary transition ease-in-out text-second "
                    >
                      Sobre nós
                    </Link>
                    <Link
                      to="/"
                      className="text-2xl hover:text-primary transition ease-in-out text-second "
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