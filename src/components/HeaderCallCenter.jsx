import iconLeadsWhite from "../assets/iconLeadsWhite.svg"
import iconPlus from "../assets/iconplus.svg"
import iconAgendaWhite from "../assets/iconAgendaWhite.svg"
import iconCadastroWhite from "../assets/iconCadastroWhite.svg"
import iconUserProfile from "../assets/iconUserProfile.svg"
import iconNotification from "../assets/iconNotification.svg"
import iconLogout from "../assets/iconLogout.svg"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { useState } from "react"




const HeaderCallCenter = () => {

    const { user } = useAuth();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [clickLogout, setClickLogout] = useState(false);

    const sair = () => {
        logout()
        navigate("/login", { replace: true })


    }



    return (

        <header className="absolute top-0 left-0 w-full h-32 bg-[#24ADE8]  ">
            <div className="ml-[300px] mt-8 gap-5 flex items-center  ">
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


                <div className="mr-4 flex gap-4 items-baseline z-20">
                    <button>
                        <div className="flex items-center gap-1">
                            <img src={iconUserProfile} alt="Icone Perfil Funcionario" />
                            <p className="text-white font-lexend">{user?.nome.split(" ")[0]}</p>
                        </div>
                    </button>


                    <div className=" h-9 w-[1px] bg-[#ffffff]" />

                    <div className="flex gap-2">
                        <img src={iconNotification} alt="Icone Notificacao" />
                        <button onClick={() => setClickLogout(true)} >
                            <img src={iconLogout} alt="Logout" />
                        </button>

                        {clickLogout && (
                            <div className="fixed inset-0 text-white flex justify-center items-center bg-black/40 z-50 cursor-default">

                                <div className="bg-[#24ADE8] rounded-xl shadow-xl p-6 w-[350px] flex flex-col justify-center items-center animate-fadeIn">

                                    <h2 className="text-lg font-semibold mb-3">
                                        Confirmar saída
                                    </h2>

                                    <p className=" mb-6">
                                        Você deseja realmente sair?
                                    </p>

                                    <div className="flex justify-center gap-3">

                                        <button
                                            onClick={() => setClickLogout(false)}
                                            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-[#ffffff0e] transition"
                                        >
                                            Cancelar
                                        </button>

                                        <button
                                            onClick={sair}
                                            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                        >
                                            Sair
                                        </button>

                                    </div>

                                </div>

                            </div>
                        )}

                    </div>




                </div>
            </div>

        </header>

    )
}

export default HeaderCallCenter;