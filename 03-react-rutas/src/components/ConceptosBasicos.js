import { Routes, Route, Link } from "react-router-dom";


const ConceptosBasicos = () => {
    return ( 
        <div>
            <h2>Conceptos Básicos</h2>
            <Routes>
                <Route path="/" element={
                <h3>Home</h3>
                }>                    
                </Route>
                <Route path="/acerca" element={
                <h3>Acerca de...</h3>
                }>                  
                </Route>
                <Route path="/contacto" element={
                <h3>Contácto...</h3>
                }>
                </Route>
            </Routes>
        </div>
     );
}

 export default ConceptosBasicos;