import cartinha from '../../images/voluntarioCartinha.jpg'

function CurrentCampaign() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="w-full z-99 h-home bg-cover bg-center flex lg:p-20 p-5" style={{ backgroundImage: `url(${cartinha})` }}>
            <div className="flex flex-col p-5 justify-center items-center lg:p-10">
                <h2 className="lg:text-6xl text-3xl font-bold text-white mb-4 ">Corrente do Bem!</h2>
                <h3 className=' text-white text-center font-rubik text-1xl lg:text-2xl md:text-[20px]'>Leve amor e carinho através das palavras, escrevendo cartas para idosos em qualquer lugar do mundo. Junte-se a nós!</h3>
                <button onClick={(e) => { e.preventDefault(); scrollToSection('Iniciativas'); }} className="lg:w-[70%] w-full bg-primary mt-10 text-white px-10 py-3 rounded-full hover:bg-white hover:text-primary transition">Participe!</button>
            </div>

        </div>
    );
}

export default CurrentCampaign;