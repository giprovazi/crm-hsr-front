import { useState, useEffect } from "react";
import CallCenterLayout from "../../components/CallCenterLayout"
import { api } from "../../services/api";
import iconLeads from "../../assets/iconLeads.svg"
import iconSearch from "../../assets/search.png"


const Leads = () => {

    const [leads, setLeads] = useState([]);
    const [leadsFiltrado, setLeadsFiltrado] = useState([]);

    const leadsPorStatus = {
        NOVO: leads.filter(l => l.status === "NOVO"),
        AGENDADO: leads.filter(l => l.status === "CONSULTA_AGENDADA" || l.status === "CONSULTA_CONFIRMADA"),
        EM_ATENDIMENTO: leads.filter(l => l.status === "EM_ATENDIMENTO"),
        PERDIDO: leads.filter(l => l.status === "PERDIDO"),
        ENCAMINHADO_VENDAS: leads.filter(l => l.status === "ENCAMINHADO_VENDAS")
    };

    useEffect(() => {
        api.get("/api/leads")
            .then((response) => {
                setLeads(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar leads:", error);
            });
    }, []);




    return (
        <CallCenterLayout>
            
            <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between bg-white w-full mt-10 p-4 rounded-md mr-10 shadow-lg">
                    <div className="flex gap-2 justify-start items-center">
                        <img src={iconLeads} alt="Icone Leads" className="w-[1.9rem] " />
                        <h1 className="font-lexend text-[#00A1E6] pl-2 text-2xl cursor-default">Leads - Painel Administrativo</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center bg-white border border-[#00a1e685] rounded-lg shadow-sm px-2 w-56 ">
                            <img src={iconSearch} alt="Icone Busca" className="w-4 h-4 mr-2 opacity-60" />
                            <input type="text" placeholder="Buscar lead por id..." className="font-space w-full py-2 text-sm bg-transparent outline-none placeholder-gray-400" />
                        </div>
                        <button type="button" className="bg-[#00A1E6] rounded-lg shadow-sm px-2 h-9 w-14 flex items-center justify-center hover:bg-[#00a1e6de]">
                            <p className="text-white font-lexend text-sm">Buscar</p>
                        </button>
                    </div>


                </div>

                <div className="grid grid-cols-10 gap-4 font-space cursor-default text-md bg-[#c5c5c533] pb-10 pt-4 px-4 rounded-md">

                    <div className="col-span-2 flex  flex-col h-auto w-full   ">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#2400c5] rounded-md"></div>
                            <p className="p-3 font-semibold">Novo</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.NOVO.map((lead) => (
                                <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                                        <p className="font-bold text-sm">ID: {lead.id}</p>
                                    </div>
                                    <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="col-span-2 flex  flex-col h-auto w-full   ">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#fc8a08] rounded-md"></div>
                            <p className="p-3 font-semibold">Em Atendimento</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.EM_ATENDIMENTO.map((lead) => (
                                <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                                        <p className="font-bold text-sm">ID: {lead.id}</p>
                                    </div>
                                    <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="col-span-2 flex  flex-col h-auto w-full   ">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#ecde13] rounded-md"></div>
                            <p className="p-3 font-semibold">Agendado</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.AGENDADO.map((lead) => (
                                <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                                        <p className="font-bold text-sm">ID: {lead.id}</p>
                                    </div>
                                    <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="col-span-2 flex  flex-col h-auto w-full   ">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#ff0202] rounded-md"></div>
                            <p className="p-3 font-semibold">Perdido</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.PERDIDO.map((lead) => (
                                <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                                        <p className="font-bold text-sm">ID: {lead.id}</p>
                                    </div>
                                    <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>

                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="col-span-2 flex  flex-col h-auto w-full   ">
                        <div className="flex bg-white rounded-md shadow-md">
                            <div className="h-full w-[0.2rem] bg-[#17c200] rounded-md"></div>
                            <p className="p-3 font-semibold">Encaminhado</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {leadsPorStatus.ENCAMINHADO_VENDAS.map((lead) => (
                                <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                                        <p className="font-bold text-sm">ID: {lead.id}</p>
                                    </div>
                                    <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>


            </div>
        </CallCenterLayout>

    )
}

export default Leads;