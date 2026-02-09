import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import RoleRoute from "./RoleRoute";
import Home from "../pages/callcenter/Home"
import Leads from "../pages/callcenter/Leads";
import Agenda from "../pages/callcenter/Agenda";
import Confirmacoes from "../pages/callcenter/Confirmacoes";
import Historico from "../pages/callcenter/Historico";
import Cadastro from "../pages/callcenter/Cadastro";
import { Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <RoleRoute allowedRoles={["ADMIN"]}>
              {/* <AdminDashboard /> */}
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/home"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Home />
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/leads"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Leads />
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/agenda"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Agenda />
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/confirmacoes"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Confirmacoes />
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/historico"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Historico />
            </RoleRoute>
          }
        />

        <Route
          path="/callcenter/cadastro"
          element={
            <RoleRoute allowedRoles={["CALL_CENTER", "ADMIN"]}>
              <Cadastro />
            </RoleRoute>
          }
        />

        <Route
          path="/recepcao"
          element={
            <RoleRoute allowedRoles={["RECEPCAO"]}>
              {/* <RecepcaoDashboard /> */}
            </RoleRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
