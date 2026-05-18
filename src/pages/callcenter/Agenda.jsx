import { useNavigate } from "react-router-dom";
import CallCenterLayout from "../../components/CallCenterLayout.jsx";
import iconAgendaGray from "../../assets/iconAgendaGray.svg";
import iconSeta from "../../assets/iconSeta.svg";
 
const Agenda = () => {
    const navigate = useNavigate();
 
    return (
        <CallCenterLayout>
            <div className="flex flex-col w-full mr-10 mb-4 ">
                <div className="flex justify-between items-center mb-6 bg-white w-full mt-10 p-4 shadow-lg  rounded-md">
                    <div>
                        <p className="text-xs text-gray-400 font-lexend">Call Center / Agenda</p>
                        <p className="text-2xl font-medium font-lexend text-gray-900">Agenda</p>
                    </div>
 
                </div>
 
                <div className="grid grid-cols-6 gap-5 w-full">
                    <div className="col-span-2 bg-white rounded-xl h-[220px] w-full flex flex-col shadow-lg">
                        <div className="flex justify-between items-start pt-4 px-5 font-space">
                            <p className="text-[#00A1E6] text-xl font-semibold">
                                Hoje
                            </p>
 
                            <img src={iconAgendaGray} alt="Ícone Agenda" className="w-7" />
                        </div>
 
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                3
                            </p>
 
                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Agendamentos marcados para hoje
                            </p>
                        </div>
 
                        <div className="flex justify-end mr-4 mb-4">
                            <button onClick={() => navigate("/callcenter/agenda/detalhes?filtro=hoje")}>
                                <div className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-colors duration-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <p className="text-white font-space font-semibold text-xs">
                                        Ver detalhes
                                    </p>
 
                                    <img src={iconSeta} alt="Ícone Seta" className="w-4" />
                                </div>
                            </button>
                        </div>
                    </div>
 
                    <div className="col-span-2 bg-white rounded-xl h-[220px] w-full flex flex-col shadow-lg">
                        <div className="flex justify-between items-start pt-4 px-5 font-space">
                            <p className="text-[#00A1E6] text-xl font-semibold">
                                Próximos
                            </p>
 
                            <img src={iconAgendaGray} alt="Ícone Agenda" className="w-7" />
                        </div>
 
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                2
                            </p>
 
                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Agendamentos futuros 
                            </p>
                        </div>
 
                        <div className="flex justify-end mr-4 mb-4">
                            <button onClick={() => navigate("/callcenter/agenda/detalhes?filtro=proximos")}>
                                <div className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-colors duration-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <p className="text-white font-space font-semibold text-xs">
                                        Ver detalhes
                                    </p>
 
                                    <img src={iconSeta} alt="Ícone Seta" className="w-4" />
                                </div>
                            </button>
                        </div>
                    </div>
 
                    <div className="col-span-2 bg-white rounded-xl h-[220px] w-full flex flex-col shadow-lg">
                        <div className="flex justify-between items-start pt-4 px-5 font-space">
                            <p className="text-[#00A1E6] text-xl font-semibold">
                                Finalizados
                            </p>
 
                            <img src={iconAgendaGray} alt="Ícone Agenda" className="w-7" />
                        </div>
 
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                8
                            </p>
 
                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Agendamentos concluídos
                            </p>
                        </div>
 
                        <div className="flex justify-end mr-4 mb-4">
                            <button onClick={() => navigate("/callcenter/agenda/detalhes?filtro=concluidas")}>
                                <div className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-colors duration-300 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <p className="text-white font-space font-semibold text-xs">
                                        Ver detalhes
                                    </p>
 
                                    <img src={iconSeta} alt="Ícone Seta" className="w-4" />
                                </div>
                            </button>
                        </div>
                    </div>
 
                    <div className="col-span-6 bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">
                        <div>
                            <p className="text-[#00A1E6] text-xl font-semibold font-space">
                                Novo agendamento
                            </p>
 
                            <p className="text-[#A1A1A1] text-md font-space font-medium mt-1">
                                Agende avaliações iniciais dos pacientes
                            </p>
                        </div>
 
                        <button
                            onClick={() => navigate("/callcenter/agenda/novo-agendamento")}
                            className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-all duration-300 px-6 py-3 rounded-xl text-white font-space font-bold shadow-md"
                        >
                            + Novo agendamento
                        </button>
                    </div>
 
                    <div className="col-span-6 bg-white rounded-xl w-full flex flex-col shadow-lg mt-1">
                        <div className="flex justify-between items-center pt-5 px-6 font-space">
                            <div>
                                <p className="text-[#00A1E6] text-xl font-semibold">
                                    Próximos agendamentos
                                </p>
 
                                <p className="text-[#A1A1A1] text-md font-medium mt-1">
                                    Avaliações agendadas
                                </p>
                            </div>
 
                            <button
                                onClick={() => navigate("/callcenter/agenda/detalhes?filtro=proximos")}
                                className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-colors duration-300 px-5 py-3 rounded-xl text-white font-semibold"
                            >
                                Ver agenda completa
                            </button>
                        </div>
 
                        <div className="flex flex-col gap-4 px-6 py-5 font-space">
                            <div className="bg-[#F4F4F4] rounded-xl p-4 flex justify-between items-center border border-transparent hover:border-[#00A1E6] transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#00A1E6] text-white rounded-xl w-20 h-16 flex flex-col justify-center items-center shadow-md shrink-0">
                                        <p className="text-[11px] font-semibold leading-none">
                                            Amanhã
                                        </p>
 
                                        <p className="text-xl font-bold leading-tight mt-1">
                                            14:30
                                        </p>
                                    </div>
 
                                    <div>
                                        <p className="text-[#00A1E6] text-lg font-bold">
                                            Ana Souza
                                        </p>
 
                                        <p className="text-[#6D6D6D] font-semibold">
                                            Avaliação estética
                                        </p>
 
                                        <p className="text-[#A1A1A1] font-medium">
                                            Dr. Rafael Almeida
                                        </p>
                                    </div>
                                </div>
 
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#D9F7E8] text-[#23A55A] px-4 py-2 rounded-xl font-semibold">
                                        Confirmado
                                    </div>
 
                                    <button
                                        onClick={() => navigate("/callcenter/agenda/consulta/1")}
                                        className="bg-white border border-[#00A1E6] text-[#00A1E6] hover:bg-[#00A1E6] hover:text-white transition-all duration-300 px-5 py-3 rounded-xl font-semibold"
                                    >
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
 
                            <div className="bg-[#F4F4F4] rounded-xl p-4 flex justify-between items-center border border-transparent hover:border-[#00A1E6] transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#00A1E6] text-white rounded-xl w-20 h-16 flex flex-col justify-center items-center shadow-md shrink-0">
                                        <p className="text-[11px] font-semibold leading-none">
                                            24/05
                                        </p>
 
                                        <p className="text-xl font-bold leading-tight mt-1">
                                            16:00
                                        </p>
                                    </div>
 
                                    <div>
                                        <p className="text-[#00A1E6] text-lg font-bold">
                                            Marcos Lima
                                        </p>
 
                                        <p className="text-[#6D6D6D] font-semibold">
                                            Retorno pós-operatório
                                        </p>
 
                                        <p className="text-[#A1A1A1] font-medium">
                                            Dra. Camila Rocha
                                        </p>
                                    </div>
                                </div>
 
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#FFF4D6] text-[#C78B00] px-4 py-2 rounded-xl font-semibold">
                                        Pendente
                                    </div>
 
                                    <button
                                        onClick={() => navigate("/callcenter/agenda/consulta/2")}
                                        className="bg-white border border-[#00A1E6] text-[#00A1E6] hover:bg-[#00A1E6] hover:text-white transition-all duration-300 px-5 py-3 rounded-xl font-semibold"
                                    >
                                        Ver detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CallCenterLayout>
    );
};
 
export default Agenda;