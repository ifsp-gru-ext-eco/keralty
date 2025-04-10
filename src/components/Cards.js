import { FiMail } from "react-icons/fi";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { GiViolin } from "react-icons/gi";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Cards() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="flex justify-evenly lg:flex-row flex-col items-center bg-primary p-8" id="Iniciativas">
            <div className="flex flex-col p-5 justify-around items-center border rounded border-white flex-1 lg:min-h-[400px]" data-aos="fade-right" data-aos-duration="1500">
                <div className="flex flex-col justify-around items-center text-center">
                    <FiMail className="text-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                    <h2 className="text-2xl text-center lg:text-3xl text-white font-rubik font-bold">Corrente do Bem</h2>
                    <p className="text-center text-1xl text-white font-rubik">Leve amor e carinho através das palavras, escrevendo cartas para idosos em qualquer lugar do mundo. Junte-se a nós!</p>
                </div>
                <div className="mt-3 w-[80%]">
                    <a rel="noreferrer" target="_blank" href="https://www.atados.com.br/ong/associacao-keralty/vagas"><button className="border w-full p-2 pr-8 pl-8 rounded-full border-white text-white font-rubik cursor-pointer hover:bg-white hover:text-primary bg-primary transition">Inscreva-se!</button></a>
                </div>
            </div>
            <div className="lg:ml-10 lg:mt-0 mt-10 flex flex-col p-5 justify-around items-center border rounded border-white flex-1 lg:min-h-[400px]" data-aos="fade-right" data-aos-duration="1500">
                <div className="flex flex-col justify-around items-center text-center">
                    <MdOutlineVolunteerActivism className="text-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                    <h2 className="text-2xl text-center lg:text-3xl text-white font-rubik font-bold">Voluntariado</h2>
                    <p className="text-center text-1xl text-white font-rubik">Voluntariado em Curitiba - PR: traga alegria a idosos com música, dança e bingo. Participe dessa ação especial e transforme vidas!</p>
                </div>
                <div className="mt-3 w-[80%]">
                    <a rel="noreferrer" target="_blank" href="https://www.atados.com.br/ong/associacao-keralty/vagas"><button className="w-full border p-2 pr-8 pl-8 rounded-full border-white text-white font-rubik cursor-pointer hover:bg-white hover:text-primary bg-primary transition">Voluntariar-se!</button></a>
                </div>
            </div>
           
            <div className="lg:ml-10 lg:mt-0 mt-10 flex flex-col p-5 justify-around items-center border rounded border-white flex-1 lg:min-h-[400px]" data-aos="fade-right" data-aos-duration="1500">
                <div className="flex flex-col justify-around items-center text-center">
                    <GiViolin className="text-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                    <h2 className="text-2xl text-center lg:text-3xl text-white font-rubik font-bold">Músicos</h2>
                    <p className="text-center text-1xl text-white font-rubik">Sua paixão pela música pode alegrar vidas! Buscamos voluntários com habilidades musicais para gerar momentos inesquecíveis.</p>
                </div>
                <div className="mt-3 w-[80%]">
                    <a rel="noreferrer" target="_blank" href="https://www.atados.com.br/ong/associacao-keralty/vagas    "><button className="w-full border p-2 pr-8 pl-8 rounded-full border-white text-white font-rubik cursor-pointer hover:bg-white hover:text-primary bg-primary transition">Inscreva-se!</button></a>
                </div>
            </div>
        </div>
    )
}

export default Cards;