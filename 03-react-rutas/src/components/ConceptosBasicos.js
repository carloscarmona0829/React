import { Routes, Route, Link } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConceptos from "./MenuConceptos";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <MenuConceptos />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
};

export default ConceptosBasicos;
