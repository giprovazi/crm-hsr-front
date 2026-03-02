import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);
    
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  const getCurrentUser = async () => {
    try {
      const response = await api.get("/api/funcionarios/me")
      return response.data
    } catch (error) {
      console.error("Erro ao buscar usuário:", error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
