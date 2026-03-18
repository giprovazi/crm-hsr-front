import iconLeadsWhite from "../assets/iconLeadsWhite.svg"
import iconPlus from "../assets/iconplus.svg"
import iconAgendaWhite from "../assets/iconAgendaWhite.svg"
import iconCadastroWhite from "../assets/iconCadastroWhite.svg"
import iconUserProfile from "../assets/iconUserProfile.svg"
import iconNotification from "../assets/iconNotification.svg"
import iconNotificationNone from "../assets/iconNotificationNone.svg"
import iconLogout from "../assets/iconLogout.svg"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import OutsideClickHandler from "react-outside-click-handler";
import Swal from 'sweetalert2'

const HeaderCallCenter = ({ toggleSidebar, isSidebarOpen }) => {
    const { user, logout, getCurrentUser } = useAuth();
    const [currentUser, setCurrentUser] = useState(null)
    const navigate = useNavigate();
    const [clickUserProfile, setClickUserProfile] = useState(false);

    const sair = () => {
        logout()
        navigate("/login", { replace: true })
    }

    useEffect(() => {
        const loadUser = async () => {
            const user = await getCurrentUser()
            setCurrentUser(user)
        }
        loadUser()
    }, [])

    return (
        <header className="absolute top-0 left-0 w-full h-28 bg-[#24ADE8] shadow-md z-10">
            <div className={`mt-8 gap-5 flex items-center transition-all duration-300 ${isSidebarOpen ? 'ml-[300px]' : 'ml-8'}`}>
                <button 
                    onClick={toggleSidebar} 
                    className="text-white hover:bg-[#ffffff20] p-2 rounded-md transition-colors"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <div className="flex gap-6 flex-1 text-white font-lexend text-md 2xl:text-lg">
                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconLeadsWhite} alt="Icone Leads" className="w-[1.8rem]" />
                            <p className="cursor-default">Novo Lead</p>
                        </div>
                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                    </div>

                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconAgendaWhite} alt="Icone Agenda" className="w-[1.8rem]" />
                            <p className="cursor-default">Novo Agendamento</p>
                        </div>
                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                    </div>

                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-3 py-3 px-2 z-20 group hover:bg-[#ffffff0e] transition-colors duration-200">
                        <div className="flex items-center gap-4 ">
                            <img src={iconCadastroWhite} alt="Icone Cadastro" className="w-[1.8rem]" />
                            <p className="cursor-default">Novo Cadastro</p>
                        </div>
                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-90" />
                    </div>
                </div>

                <div className="mr-10 flex gap-4 items-baseline z-20">
                    <OutsideClickHandler onOutsideClick={() => setClickUserProfile(false)}>
                        <div className="relative">
                            <button onClick={() => setClickUserProfile(prev => !prev)}>
                                <div className="flex items-center gap-1">
                                    <img src={iconUserProfile} alt="Icone Perfil Funcionario" />
                                    <p className="text-white font-lexend ">{user?.nome.split(" ")[0]}</p>
                                </div>
                            </button>

                            <div className={`absolute right-0 mt-1 w-56 p-3 font-lexend flex flex-col gap-3 bg-gray-100 rounded-lg shadow-lg z-20 transition-all duration-200 ease-in-out ${clickUserProfile ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}`}>
                                <div className="bg-[#24ADE8] text-white p-2 shadow-lg rounded-md flex gap-1 items-center">
                                    <img src={iconUserProfile} alt="Icone Perfil Funcionario" />
                                    <p className=" ">{currentUser?.nome}</p>
                                </div>
                                <p className="text-black  text-[0.9rem]"><strong>Email:</strong> {currentUser?.email}</p>
                                <p className="text-black text-[0.9rem]"><strong>Setor:</strong> {currentUser?.setor}</p>
                            </div>
                        </div>
                    </OutsideClickHandler>

                    <div className=" h-9 w-[1px] bg-[#ffffff]" />

                    <div className="flex gap-2">
                        <img src={iconNotificationNone} alt="Icone Notificacao" />
                        <button onClick={() => Swal.fire({
                            title: "Você deseja mesmo sair ?",
                            icon: "question",
                            showCancelButton: true,
                            iconColor: "#24ADE8",
                            confirmButtonColor: "#24ADE8",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sair",
                            cancelButtonText: "Cancelar"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                sair();
                            }
                        })} >
                            <img src={iconLogout} alt="Logout" />
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default HeaderCallCenter;