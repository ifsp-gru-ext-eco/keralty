import logo from '../../images/logo-keralty.png'
import homem from '../../images/homem-sentado.png'

function Initial(){
    return(

        <div className="w-full h-home bg-slate-100 flex lg:flex-row flex-col justify-evenly ">
        <div className="flex-1 flex flex-col p-5  items-center justify-center">
            <img data-aos="fade-right" data-aos-duration="1000" alt='Logo Keralty' src={logo} ></img>
            <h3 data-aos="fade-right" data-aos-duration="1500" className=' text-second text-center font-rubik lg:text-2xl md:text-[20px]'>Promovemos o bem-estar de paciente em cuidados paliativos com muito amor, carinho e dedicação</h3>
        </div>
        <div className="p-5 flex-1 flex items-center justify-center">
            <img data-aos="fade-left" data-aos-duration="1500" alt='Homem sentado sorrindo' className='w-[40%] lg:w-[70%] overflow-hidden  object-cover max-w-full max-h-full' src={homem}></img>
        </div>
        </div>

    );
}

export default Initial;