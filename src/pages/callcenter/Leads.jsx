import { useState, useEffect, useRef } from "react";
import CallCenterLayout from "../../components/CallCenterLayout";
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api";
import iconLeads from "../../assets/iconLeads.svg";
import iconSearch from "../../assets/search.png";
import Swal from 'sweetalert2';
import CardLeads from "../../components/CardLeads";

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [leadsFiltrado, setLeadsFiltrado] = useState([]);
    const [leadId, setLeadId] = useState("");
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
                <div className={`flex justify-between bg-white w-full mt-10 p-4  rounded-md shadow-lg mb-4 `}>
                    <div>
                        <p className="text-xs text-gray-400 font-lexend">Call Center / Leads</p>
                        <p className="text-2xl font-medium font-lexend text-gray-900">Painel Administrativo</p>
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

                <div className={`grid grid-cols-10 gap-4 font-space cursor-default text-md bg-[#c5c5c533] px-4 rounded-md p-10 py-6 mb-4`}>

                    <div className="col-span-2 flex flex-col h-auto w-full">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#2400c5] rounded-md"></div>
                            <p className="p-3 font-semibold">Novo</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.NOVO.map((lead) => (
                                <CardLeads key={lead.id} lead={lead}/>
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
                                <CardLeads key={lead.id} lead={lead}/>
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
                                <CardLeads key={lead.id} lead={lead}/>
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
                                <CardLeads key={lead.id} lead={lead}/>               
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
                                <CardLeads key={lead.id} lead={lead}/>   
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </CallCenterLayout>
    );
};

export default Leads;