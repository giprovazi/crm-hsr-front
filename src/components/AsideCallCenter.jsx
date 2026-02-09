import Logo from "../assets/logo.svg"
import iconHome from "../assets/iconHome.svg"
import iconHomeWhite from "../assets/iconHomeWhite.svg"
import iconLeads from "../assets/iconLeads.svg"
import iconLeadsWhite from "../assets/iconLeadsWhite.svg"
import iconAgenda from "../assets/iconAgenda.svg"
import iconAgendaWhite from "../assets/iconAgendaWhite.svg"
import iconConfirmacoes from "../assets/iconConfirmacoes.svg"
import iconConfirmacoesWhite from "../assets/iconConfirmacoesWhite.svg"
import iconHistorico from "../assets/iconHistorico.svg"
import iconHistoricoWhite from "../assets/iconHistoricoWhite.svg"
import iconCadastro from "../assets/iconCadastro.svg"
import iconCadastroWhite from "../assets/iconCadastroWhite.svg"
import { NavLink } from "react-router-dom";

const AsideCallCenter = () => {
    return (
        <aside className=" bg-white w-64 h-screen rounded-tr-[4rem] overflow-hidden shadow-[9px_6px_19.6px_0px_rgba(0,0,0,0.25)]">
            <div className="pt-10 pl-16">
                <img src={Logo} alt="Logo" className="w-[5.8rem] " />
            </div>

            <nav className="flex flex-col mt-20 gap-5 ">
                <div>
                    <NavLink to="/callcenter/home" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconHomeWhite : iconHome} alt="Icone Home" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend  text-[22px]">HOME</p>
                                
                            </>
                        )}
                        
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.54)]" /> 
                </div>
               

                <div>
                    <NavLink to="/callcenter/leads" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconLeadsWhite : iconLeads} alt="Icone Leads" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend  text-[22px]">LEADS</p>
                            </>
                        )}
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.61)]" /> 
                </div>

                
                <div>
                    <NavLink to="/callcenter/agenda" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconAgendaWhite : iconAgenda} alt="Icone Agenda" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend  text-[22px]">AGENDA</p>
                            </>
                        )}
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.61)]" /> 
                </div>


                <div>
                    <NavLink to="/callcenter/confirmacoes" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconConfirmacoesWhite : iconConfirmacoes} alt="Icone Confirmacoes" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend  text-[21px]">CONFIRMAÇÕES</p>
                            </>
                        )}
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.61)]" /> 
                </div>


                <div>
                    <NavLink to="/callcenter/historico" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconHistoricoWhite : iconHistorico} alt="Icone Historico" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend text-[22px]">HISTÓRICO</p>
                            </>
                        )}
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.61)]" /> 
                </div>


                <div>
                    <NavLink to="/callcenter/cadastro" className={({ isActive }) =>`flex p-4 w-full gap-3 items-baseline transition-all ${isActive ? "bg-[#24ADE8] text-white " : " text-[#00A1E6] bg-white"}`}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? iconCadastroWhite : iconCadastro} alt="Icone Cadastro" className="w-[2rem] translate-y-[5px]" />
                                <p className="font-lexend text-[22px]">CADASTRO</p>
                            </>
                        )}
                    </NavLink>
                    <div className="ml-4 w-full h-[2px] bg-[rgba(238,238,238,0.61)]" /> 
                </div>


            </nav>
        </aside>
    )
}

export default AsideCallCenter;