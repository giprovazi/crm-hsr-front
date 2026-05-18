
import { useNavigate } from "react-router-dom";
import CallCenterLayout from "../../components/CallCenterLayout.jsx";
import iconSetaEsquerda from "../../assets/IconSetaEsquerda.svg";

 
const NovoAtendimento = () => {
    const navigate = useNavigate();
 
    return (
        <CallCenterLayout>
            <div className="flex flex-col w-full mr-10 mt-10 font-space mb-4">
                <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => navigate(-1)}>
                        <img src={iconSetaEsquerda} alt="Icon Seta Esquerda" className="w-12 hover:opacity-70" />
                    </button>
                    <div>
                        <p className="text-xs text-gray-400 font-lexend">Call Center / Agenda</p>
                        <p className="text-lg font-medium font-lexend text-gray-800">Novo Agendamento</p>
                    </div>
                </div>
 
                <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8">
                    <div>
                        <p className="text-[#00A1E6] text-2xl font-bold">
                            Informações do agendamento
                        </p>
 
                        <p className="text-[#A1A1A1] font-medium mt-1">
                            Preencha os dados para registrar um novo agendamento
                        </p>
                    </div>
 
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Nome do paciente
                            </label>
 
                            <input
                                type="text"
                                placeholder="Digite o nome"
                                className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all"
                            />
                        </div>
 
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Telefone
                            </label>
 
                            <input
                                type="text"
                                placeholder="(11) 99999-9999"
                                className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all"
                            />
                        </div>
 
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Médico responsável
                            </label>
 
                            <select className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all">
                                <option>Selecione</option>
                                <option>Dr. Rafael Almeida</option>
                                <option>Dra. Camila Rocha</option>
                                <option>Dr. Henrique Costa</option>
                            </select>
                        </div>
 
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Tipo de atendimento
                            </label>
 
                            <select className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all">
                                <option>Selecione</option>
                                <option>Avaliação estética</option>
                                <option>Consulta cirúrgica</option>
                                <option>Retorno pós-operatório</option>
                                <option>Procedimento estético</option>
                            </select>
                        </div>
 
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Data
                            </label>
 
                            <input
                                type="date"
                                className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all"
                            />
                        </div>
 
                        <div className="flex flex-col gap-2">
                            <label className="text-[#6D6D6D] font-semibold">
                                Horário
                            </label>
 
                            <input
                                type="time"
                                className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all"
                            />
                        </div>
                    </div>
 
                    <div className="flex flex-col gap-2">
                        <label className="text-[#6D6D6D] font-semibold">
                            Observações
                        </label>
 
                        <textarea
                            placeholder="Digite observações adicionais..."
                            rows={6}
                            className="bg-[#F4F4F4] rounded-2xl p-4 outline-none border border-transparent focus:border-[#00A1E6] transition-all resize-none"
                        />
                    </div>
 
                    <div className="flex justify-end gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-[#F4F4F4] hover:bg-[#e9e9e9] transition-all duration-300 px-8 py-4 rounded-2xl text-[#5A5A5A] font-bold text-md"
                        >
                            Cancelar
                        </button>
 
                        <button className="bg-[#00A1E6] hover:bg-[#00a1e6de] transition-all duration-300 px-8 py-4 rounded-2xl text-white font-bold text-md shadow-lg">
                            Salvar 
                        </button>
                    </div>
                </div>
            </div>
        </CallCenterLayout>
    );
};
 
export default NovoAtendimento;