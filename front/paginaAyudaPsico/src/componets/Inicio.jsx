import React from "react";
import Carrusel from "./Carrusel";
import InicioTexto from "./InicioTexto";
import "./Inicio.css"; // Archivo exclusivo para la vista de inicio

function Inicio() {
    return (
        <div className="wrapperInicio">
            <div className="inicio-titulo" style={{ textAlign: "center", marginBottom: "100px" }}>
                <h1>Bienvenido a <i>MenteSer</i>.</h1>
                <br>
                </br>
                <p><em>Un espacio dedicado a brindar apoyo y conectar con quienes más lo necesitan.</em></p>
            </div>
            
            {/* El carrusel se encarga de su propia visualización */}
            <Carrusel />

            <InicioTexto/>

        </div>
        
    );
}

export default Inicio;