import { Routes, Route, Link, Navigate } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <MenuConceptos />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/usuario/:username" element={<Usuario />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/about" element={<Navigate to="/acerca" />} />
        <Route path="/contact" element={<Navigate to="/contacto" />} />
        <Route path="/react/*" element={<ReactTopics />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default ConceptosBasicos;
