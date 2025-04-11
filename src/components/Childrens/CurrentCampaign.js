import cartinha from '../../images/voluntarioCartinha.jpg'

function CurrentCampaign() {

    return (
        <div className="w-full z-99 lg:h-home bg-cover bg-center flex p-20" style={{ backgroundImage: `url(${cartinha})` }}>
            <div className="flex flex-col p-5 justify-center items-center p-10">
                <h2 className="text-6xl font-bold text-white mb-4">Corrente do Bem!</h2>
                <h3 className=' text-white text-center font-rubik lg:text-2xl md:text-[20px]'>Leve amor e carinho através das palavras, escrevendo cartas para idosos em qualquer lugar do mundo. Junte-se a nós!</h3>
                <button className="w-[70%] bg-primary mt-10 text-white px-10 py-3 rounded-full hover:bg-white hover:text-primary transition">Participe!</button>
            </div>

        </div>
    );
}

export default CurrentCampaign;