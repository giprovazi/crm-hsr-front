import iconLeadsWhite from "../assets/iconLeadsWhite.svg"
import iconPlus from "../assets/iconplus.svg"
import iconAgendaWhite from "../assets/iconAgendaWhite.svg"
import iconCadastroWhite from "../assets/iconCadastroWhite.svg"
import iconUserProfile from "../assets/iconUserProfile.svg"



const HeaderCallCenter = () => {
    return (

        <header className="absolute top-0 left-0 w-full h-32 bg-[#24ADE8]  ">
            <div className="ml-[340px] mt-8 flex items-center  ">
                <div className="flex gap-6 flex-1 text-white font-lexend text-xl  ">

                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconLeadsWhite} alt="Icone Leads" className="w-[2.2rem]" />
                            <p className="cursor-default">Novo Lead</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                        
                        
                    </div>

                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconAgendaWhite} alt="Icone Agenda" className="w-[2.2rem]" />
                            <p className="cursor-default">Novo Agendamento</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                        
                    </div>

                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconCadastroWhite} alt="Icone Cadastro" className="w-[2.2rem]" />
                            <p className="cursor-default">Novo Cadastro</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                        
                        
                    </div>
                </div>


                <div className="mr-4">
                    <div>
                        <img src={iconUserProfile} alt="Icone Perfil Funcionario" />
                    </div>

                </div>
            </div>

        </header>

    )
}

export default HeaderCallCenter;