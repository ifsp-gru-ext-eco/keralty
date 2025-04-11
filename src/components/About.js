import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImage from "../images/about-keralty.jpg";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="bg-gray-100 py-16 px-5 flex flex-col lg:flex-row items-center justify-center">
      {/* Texto */}
      <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-4xl font-bold text-primary mb-4">Sobre a ONG Keralty</h2>
        <p className="text-lg text-gray-700 mb-6">
          A ONG Keralty promove o bem-estar de pacientes em cuidados paliativos,
          oferecendo suporte emocional, social e médico. Com amor e dedicação,
          buscamos transformar vidas e proporcionar momentos de alegria.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Nossos voluntários atuam levando conforto, arte e música a hospitais e
          lares de idosos, criando uma rede de carinho e apoio.
        </p>
        <a href="/keralty/about"><button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Saiba Mais
        </button></a>
      </div>

      {/* Imagem */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
        <img
          src={aboutImage}
          alt="Equipe da ONG Keralty"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default About;
