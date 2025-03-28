import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import AOS from 'aos';

function MobHeader() {

  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

  useEffect(() => {
    AOS.init();
    }, [])

  return (
    <div className="sticky top-0 bg-white z-20 lg:hidden">
      <div className="p-4">
        <IoIosMenu
          className="cursor-pointer text-3xl text-primary"
          onClick={() => setShowMenu(true)}
        />
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[60%] max-w-sm bg-white shadow-md transform ${showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20 p-5 font-rubik`}
      >
        {/* Ícone de fechar */}
        <IoMdClose
          className="cursor-pointer text-3xl text-primary mb-5"
          onClick={() => setShowMenu(false)}
        />

        {/* Menu */}
        <h1 className="font-roboto-slab font-bold text-[25px] mb-4">Menu</h1>
        <a
          href="#home"
          className="block text-lg hover:text-primary transition ease-in-out text-second font-rubik mb-3"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); setShowMenu(false);}}
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-lg hover:text-primary transition ease-in-out text-second font-rubik mb-3"
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); setShowMenu(false);}}
        >
          Sobre nós
        </a>
        <a
          href="#contact"
          className="block text-lg hover:text-primary transition ease-in-out text-second font-rubik"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setShowMenu(false);}}        >
          Contatos
        </a>
      </div>
    </div>
  );
}

export default MobHeader;
