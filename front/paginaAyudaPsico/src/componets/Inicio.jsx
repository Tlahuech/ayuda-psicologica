import React from "react";
import Carrusel from "./Carrusel";
import InicioTexto from "./InicioTexto";
import "./Inicio.css"; // Archivo exclusivo para la vista de inicio

function Inicio() {
    return (
        <div className="wrapperInicio">
            <div className="inicio-titulo" style={{ textAlign: "center", marginBottom: "100px" }}>
                <h1>Bienvenido a MenteSer</h1>
                <p>Un espacio dedicado a brindar apoyo y conectar con quienes más lo necesitan.</p>
            </div>
            
            {/* El carrusel se encarga de su propia visualización */}
            <Carrusel />

            <InicioTexto/>

        </div>
        
    );
}

export default Inicio;