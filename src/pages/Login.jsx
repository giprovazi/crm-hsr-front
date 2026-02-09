import FundoLogin from "../assets/fundo-login2.png"
import Logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { authApi } from "../services/authApi";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro("");

        try {
            const response = await authApi.post("http://localhost:8080/auth/login", {
            email,
            senha
            });

            login(response.data); 

            if (response.data.setor === "ADMIN") {
                navigate("/admin");
            } else if (response.data.setor === "CALL_CENTER") {
                navigate("/callcenter/home");
            } else {
                navigate("/recepcao");
            }

        } catch (err) {
            setErro("Usuário ou senha inválidos");
        }
    };

    





    return (

        <div className="h-screen flex">
            <div className="w-1/2">
                <img src={FundoLogin} alt="Fundo do login" className="h-full w-full object-cover"/>
            </div>

            <div className="w-1/2 bg-[#F4F4F4] flex flex-col items-center py-32 gap-28 shadow-[-43px_0px_26.5px_0px_rgba(0,0,0,0.25)]">
                <img src={Logo} alt="Logo" className="w-[8.5rem] " />
                <form onSubmit={handleSubmit} className="bg-[rgba(0,161,230,0.85)] w-full max-w-sm md:max-w-lg rounded-3xl px-6  pb-10 pt-7 shadow-2xl flex flex-col  ">

                    <h1 className="font-konkhmer text-white text-3xl text-center mb-5 mt-4">Login</h1>

                    <div className="flex flex-col items-start w-full gap-12 px-5">
                        <div className="w-full">
                            <p className="font-konkhmer text-white text-[19px] mb-2">Email</p>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu email..." className=" placeholder:font-konkhmer placeholder:text-[#b8b8b8c5] text-[16px] w-full py-6 px-3 rounded-lg outline-none border-none appearance-none focus:outline-none focus:ring-0"/>
                        </div>

                        <div className="w-full">
                            <p className="font-konkhmer text-white text-[19px] mb-2">Senha</p>
                            <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)} placeholder="Digite sua senha..." className="w-full font-konkhmer placeholder:text-[#b8b8b8c5] text-black text-[16px] py-6 px-3 rounded-lg outline-none border-none appearance-none focus:outline-none focus:ring-0 "/>
                        </div> 

                       {erro &&
                            <div className="w-full flex items-start justify-between gap-4 border border-red-500 bg-red-50 rounded-lg px-4 py-3">
                                
                                <p className="text-red-700 text-sm">
                                {erro}
                                </p>

                                <button
                                type="button"
                                onClick={() => setErro("")}
                                className="text-red-700 font-bold hover:text-red-900"
                                aria-label="Fechar mensagem de erro"
                                >
                                ✕
                                </button>

                            </div>
                        }              
                    </div>

                    <div className="flex justify-center mt-8">
                        <button type="submit" className="px-10 py-3 rounded-xl bg-white text-[rgb(182,150,7)] shadow-lg font-konkhmer text-lg hover:bg-slate-50">Entrar</button>
                    </div>


                </form>
                
            </div>
        </div>
    )
}

export default Login;