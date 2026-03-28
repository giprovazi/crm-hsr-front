import { useState, useEffect, useRef } from "react";
import CallCenterLayout from "../../components/CallCenterLayout";
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api";
import iconLeads from "../../assets/iconLeads.svg";
import iconSearch from "../../assets/search.png";
import Swal from 'sweetalert2';
import { ChevronDown } from "lucide-react";
import CardLeadsJsx from "../../components/CardLeads";

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [leadsFiltrado, setLeadsFiltrado] = useState([]);
    const [leadId, setLeadId] = useState("");
    const [painelAberto, setPainelAberto] = useState(true);
    const [painelAberto2, setPainelAberto2] = useState(true);
    const { getCurrentUser } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const inputRef = useRef(null);

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
        loadUser()
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
            console.log(response.data)
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
            <div className="flex flex-col w-full">
                <div className={`flex justify-between bg-white w-full mt-10 p-4  rounded-md shadow-lg ${painelAberto && "mb-4"} `}>
                    <div className="flex gap-2 justify-start items-center">
                        <img src={iconLeads} alt="Icone Leads" className="w-[1.9rem] " />
                        <h1 className="font-lexend text-[#00A1E6] pl-2 text-2xl cursor-default">Painel Administrativo</h1>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className={`flex items-center bg-white border border-[#00a1e685] rounded-lg shadow-sm px-2 w-56 transition-all duration-300 ${painelAberto ? "opacity-100 translate-y-0"   : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                            <img src={iconSearch} alt="Icone Busca" className="w-4 h-4 mr-2 opacity-60" />
                            <input type="text" ref={inputRef} value={leadId} onChange={(e) => setLeadId(e.target.value)} placeholder="Buscar lead por id..." className="font-space w-full py-2 text-sm bg-transparent outline-none placeholder-gray-400" />
                        </div>

                        <button type="button" onClick={buscarLeadId} className={`bg-[#00A1E6] rounded-lg shadow-sm px-2 h-9 w-14 flex items-center justify-center hover:bg-[#00a1e6de] transition-all duration-300 ${painelAberto ? "opacity-100 translate-y-0"   : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                            <p className="text-white font-lexend text-sm">Buscar</p>
                        </button>

                        <button
                            onClick={() => setPainelAberto(!painelAberto)}
                            className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-all duration-300"
                        >
                            <ChevronDown
                                className={`text-[#00A1E6] transition-transform duration-500 ${painelAberto ? "rotate-180" : "rotate-0"}`}
                                size={28}
                            />
                        </button>
                    </div>
                </div>

                <div className={`grid grid-cols-10 gap-4 font-space cursor-default text-md bg-[#c5c5c533] px-4 rounded-md ease-in-out duration-300 ${painelAberto ? " opacity-100 max-h-[2000px] p-10 py-6" : "max-h-0 opacity-0 py-0 pt-0"
                    }`}>

                    <div className="col-span-2 flex flex-col h-auto w-full">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#2400c5] rounded-md"></div>
                            <p className="p-3 font-semibold">Novo</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.NOVO.map((lead) => (
                                <CardLeadsJsx key={lead.id} lead={lead}/>
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
                                <CardLeadsJsx key={lead.id} lead={lead}/>
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
                                <CardLeadsJsx key={lead.id} lead={lead}/>
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
                                <CardLeadsJsx key={lead.id} lead={lead}/>               
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
                                <CardLeadsJsx key={lead.id} lead={lead}/>   
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between bg-white w-full mt-10 p-4 rounded-md shadow-lg">
                    <div className="flex gap-2 justify-start items-center">
                        <img src={iconLeads} alt="Icone Leads" className="w-[1.9rem] " />
                        <h1 className="font-lexend text-[#00A1E6] pl-2 text-2xl cursor-default"></h1>
                    </div>

                    <div className="flex gap-4 items-center">

                        <button
                            onClick={() => setPainelAberto2(!painelAberto2)}
                            className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-all duration-300"
                        >
                            <ChevronDown
                                className={`text-[#00A1E6] transition-transform duration-500 ${painelAberto2 ? "rotate-180" : "rotate-0"}`}
                                size={28}
                            />
                        </button>
                    </div>
                </div>

                <div className={`grid grid-cols-10 gap-4 font-space cursor-default text-md bg-[#c5c5c533] px-4 rounded-md fade-main duration-300 ${painelAberto2 ? "max-h-[2000px] opacity-100 py-10 pt-4" : "max-h-0 opacity-0 py-0 pt-0"
                    }`}>
                    <p>aaaaaaaaa</p>
                </div>
            </div>
        </CallCenterLayout>
    );
};

export default Leads;