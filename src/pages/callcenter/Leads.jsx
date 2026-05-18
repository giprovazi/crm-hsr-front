import { useState, useEffect, useRef } from "react";
import CallCenterLayout from "../../components/CallCenterLayout";
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api";
import iconLeadsGray from "../../assets/iconLeadsGray.svg"
import iconLeads from "../../assets/iconLeads.svg";
import iconSearch from "../../assets/search.png";
import Swal from 'sweetalert2';
import CardLeads from "../../components/CardLeads";
import iconSeta from "../../assets/iconSeta.svg";
import iconAgendaGray from "../../assets/iconAgendaGray.svg";


const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [leadsFiltrado, setLeadsFiltrado] = useState([]);
    const [leadId, setLeadId] = useState("");
    const { getCurrentUser } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const inputRef = useRef(null);
    const [countLeadsHoje, setCountLeadsHoje] = useState(0);
    const [countLeadsAtivos, setCountLeadsAtivos] = useState(0);

    const leadsPorStatus = {
        NOVO: leadsFiltrado.filter(l => l.status === "NOVO"),
        AGENDADO: leadsFiltrado.filter(l => l.status === "CONSULTA_AGENDADA" || l.status === "CONSULTA_CONFIRMADA"),
        EM_ATENDIMENTO: leadsFiltrado.filter(l => l.status === "EM_ATENDIMENTO"),
        PERDIDO: leadsFiltrado.filter(l => l.status === "PERDIDO"),
        ENCAMINHADO_VENDAS: leadsFiltrado.filter(l => l.status === "ENCAMINHADO_VENDAS")
    };

    useEffect(() => {
        const loadUser = async () => {
            const user = await getCurrentUser()
            setCurrentUser(user)
        }

        const fetchCountLeadsHoje = async () => {
            try {
                const response = await api.get("/api/leads/hoje/count")
                setCountLeadsHoje(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        const fetchCountLeadsAtivos = async () => {
            try {
                const response = await api.get("/api/leads/ativos/count")
                setCountLeadsAtivos(response.data)
            } catch (error) {
                console.error(error)
            }
        }


        loadUser()
        fetchCountLeadsHoje()
        fetchCountLeadsAtivos()
    }, [])

    useEffect(() => {
        if (!currentUser || !currentUser.id) return;
        api.get(`/api/leads/funcionario/${currentUser?.id}`)
            .then((response) => {
                setLeads(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar leads:", error);
            })
    }, [currentUser]);

    useEffect(() => {
        if (leadId === "") {
            setLeadsFiltrado(leads);
        }
    }, [leadId, leads]);



    const buscarLeadId = async () => {
        try {
            const response = await api.get(`/api/leads/funcionario/${currentUser?.id}/${leadId}`);
            setLeadsFiltrado([response.data]);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Lead não encontrado!",
                text: "O lead que você tentou buscar não existe!",
                confirmButtonColor: "#24ADE8"
            }).then(() => {
                setLeadId("")
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 500);
            })
        }
    };

    return (
        <CallCenterLayout>
            <div className="flex flex-col  w-full">
                <div className={`flex justify-between bg-white w-full mt-10 p-4  rounded-md shadow-lg mb-6 `}>
                    <div>
                        <p className="text-xs text-gray-400 font-lexend">Call Center / Leads</p>
                        <p className="text-2xl font-medium font-lexend text-gray-900">Leads</p>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-5 w-full">
                    <div className="col-span-2 bg-white rounded-xl h-[220px] w-full flex flex-col shadow-lg">
                        <div className="flex justify-between items-start pt-4 px-5 font-space">
                            <p className="text-[#00A1E6] text-xl font-semibold">
                                Hoje
                            </p>

                            <img src={iconLeadsGray} alt="Ícone Leads" className="w-7" />
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                {countLeadsHoje}
                            </p>

                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Leads cadastrados hoje
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
                                Ativos
                            </p>

                            <img src={iconLeadsGray} alt="Ícone Leads" className="w-7" />
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                {countLeadsAtivos}
                            </p>

                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Leads ativos
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
                                Contatos hoje
                            </p>

                            <img src={iconLeadsGray} alt="Ícone Leads" className="w-7" />
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center">
                            <p className="font-space text-[#00A1E6] text-[2.2rem] font-bold rounded-full border border-[#B9B9B9] flex items-center justify-center w-28 h-28 shadow-sm">
                                8
                            </p>

                            <p className="mt-2 font-space text-[#AAA9A9] font-bold text-center text-sm">
                                Contatos feitos hoje
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

                </div>


                <div className="bg-white w-full mt-6 mb-4 rounded-xl shadow-lg">
                    <div className={`flex justify-between w-full p-5 mb-4 `}>
                        <div className="justify-center items-center mt-1">
                            <p className="text-xl text-center font-semibold font-space text-[#00A1E6]">Painel de leads</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div className={`flex items-center bg-white border border-[#85858554] rounded-lg shadow-sm px-2 w-56 `}>
                                <img src={iconSearch} alt="Icone Busca" className="w-4 h-4 mr-2 opacity-60" />
                                <input type="text" ref={inputRef} value={leadId} onChange={(e) => setLeadId(e.target.value)} placeholder="Buscar lead por id..." className="font-space w-full py-2 text-sm bg-transparent outline-none placeholder-gray-400" />
                            </div>

                            <button type="button" onClick={buscarLeadId} className={`bg-[#00A1E6] rounded-lg shadow-sm px-2 h-9 w-14 flex items-center justify-center hover:bg-[#00a1e6de] `}>
                                <p className="text-white font-lexend text-sm">Buscar</p>
                            </button>
                        </div>
                    </div>

                    <div className={`grid grid-cols-10 gap-4 font-space cursor-default text-md bg-[#F4F4F4] px-4 rounded-md m-6 p-10 py-6  `}>

                        <div className="col-span-2 flex flex-col h-auto w-full">
                            <div className="flex bg-white rounded-md shadow-md">
                                <div className="h-full w-[0.2rem] bg-[#2400c5] rounded-md"></div>
                                <p className="p-3 font-semibold">Novo</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                {leadsPorStatus.NOVO.map((lead) => (
                                    <CardLeads key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col h-auto w-full">
                            <div className="flex bg-white rounded-md shadow-md">
                                <div className="h-full w-[0.2rem] bg-[#fc8a08] rounded-md"></div>
                                <p className="p-3 font-semibold">Em Atendimento</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                {leadsPorStatus.EM_ATENDIMENTO.map((lead) => (
                                    <CardLeads key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col h-auto w-full">
                            <div className="flex bg-white rounded-md shadow-md">
                                <div className="h-full w-[0.2rem] bg-[#ecde13] rounded-md"></div>
                                <p className="p-3 font-semibold">Agendado</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                {leadsPorStatus.AGENDADO.map((lead) => (
                                    <CardLeads key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col h-auto w-full">
                            <div className="flex bg-white rounded-md shadow-md">
                                <div className="h-full w-[0.2rem] bg-[#ff0202] rounded-md"></div>
                                <p className="p-3 font-semibold">Perdido</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                {leadsPorStatus.PERDIDO.map((lead) => (
                                    <CardLeads key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col h-auto w-full">
                            <div className="flex bg-white rounded-md shadow-md">
                                <div className="h-full w-[0.2rem] bg-[#17c200] rounded-md"></div>
                                <p className="p-3 font-semibold">Encaminhado</p>
                            </div>
                            <div className="flex flex-col gap-4 mt-6">
                                {leadsPorStatus.ENCAMINHADO_VENDAS.map((lead) => (
                                    <CardLeads key={lead.id} lead={lead} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </CallCenterLayout>
    );
};

export default Leads;