import iconLeadsWhite from "../assets/iconLeadsWhite.svg"
import iconPlus from "../assets/iconplus.svg"


const HeaderCallCenter = () => {
    return (

        <header className="absolute top-0 left-0 w-full h-32 bg-[#24ADE8] z-0">
            <div className="ml-[340px] mt-10 ">
                <div className="flex gap-6 text-white font-lexend text-xl ">
                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-2 py-3 px-2">
                        <div className="flex items-center gap-4 ">
                            <img src={iconLeadsWhite} alt="Icone Leads" className="w-[2.3rem]" />
                            <p>Novo Lead</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] " />
                        
                        
                    </div>
                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-2 py-3 px-2">
                        <div className="flex items-center gap-4 ">
                            <img src={iconLeadsWhite} alt="Icone Leads" className="w-[2.3rem]" />
                            <p>Novo Lead</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] " />
                        
                        
                    </div>
                    <div className="w-full max-w-xs border border-white flex justify-between rounded-md pl-2 py-3 px-2">
                        <div className="flex items-center gap-4 ">
                            <img src={iconLeadsWhite} alt="Icone Leads" className="w-[2.3rem]" />
                            <p>Novo Lead</p>
                        </div>

                        <img src={iconPlus} alt="Icone Adicionar" className="w-[1.5rem] " />
                        
                        
                    </div>
                </div>

                <div>

                </div>
            </div>

        </header>

    )
}

export default HeaderCallCenter;