const CardLeadsJsx = ({lead}) => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 flex justify-between" key={lead.id}>
            <div className="flex flex-col gap-1">
                <p className="font-medium text-sm">{lead.nome.split(" ").slice(0, 2).join(" ")}</p>
                <p className="font-bold text-sm">ID: {lead.id}</p>
            </div>
            <p className="text-sm font-normal text-[#575757]">{lead.telefone}</p>
        </div>
    )
}

export default CardLeadsJsx