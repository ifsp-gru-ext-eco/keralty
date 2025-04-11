import voluntario from '../../images/voluntario.jpg'

function SignUp() {
    return (

        <div className="w-full z-99 lg:h-home bg-cover bg-center flex p-20" style={{ backgroundImage: `url(${voluntario})` }}>
            <div className="flex flex-col p-5 justify-center">
                <h2 className="text-6xl font-bold text-white mb-4">Faça parte!</h2>
                <h3 className=' text-white text-center font-rubik lg:text-2xl md:text-[20px]'>Se interessou e gostaria de fazer parte dos nossos projetos?</h3>
                <button className=" bg-primary mt-10 text-white px-10 py-3 rounded-full hover:bg-white hover:text-primary transition">Saiba Mais</button>
            </div>

        </div>

    );
}

export default SignUp;