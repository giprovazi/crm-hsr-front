import { useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import CallCenterLayout from "../../components/CallCenterLayout";
import iconSetaEsquerda from "../../assets/IconSetaEsquerda.svg"


const LeadsDetalhes = () => {
    const { id } = useParams();
    const { getCurrentUser } = useAuth();
    const navigate = useNavigate();

    const [lead, setLead] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const user = await getCurrentUser()
            setCurrentUser(user)
        }
        loadUser()
    }, [])

    useEffect(() => {
        if (!currentUser || !currentUser.id) return;
        const fetchLead = async () => {
            try {
                const response = await api.get(`api/leads/funcionario/${currentUser?.id}/${id}`);
                setLead(response.data);
                console.log(response.data)
            } catch (error) {
                console.error("Erro ao buscar lead:", error);
            }
        };

        fetchLead();
    }, [id, currentUser]);

    if (!lead) {
        return <p>Carregando...</p>;
    }

    return (
        <CallCenterLayout>
            <div className="pt-8 ml-2">
                <button onClick={() => navigate(-1)}>
                    <img src={iconSetaEsquerda} alt="Icon Seta Esquerda" className="w-12"/>
                </button>
            </div>

            <div className="ml-11 mt-6">
                <div className="flex flex-col gap-4 bg-white px-10 py-6 rounded-lg">
                    <p className="font-lexend">Nome: {lead.nome}</p>
                    <p className="font-lexend">Email: {lead.email}</p>
                    <p className="font-lexend">ID: {lead.id}</p>
                </div>
            </div>

        </CallCenterLayout>

    )
}

export default LeadsDetalhes