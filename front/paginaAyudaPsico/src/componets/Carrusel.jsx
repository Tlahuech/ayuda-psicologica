import React from "react";
import { useState, useEffect } from "react";
import img1 from "../images/carrusel1.jpeg";
import img2 from "../images/carrusel2.jpg";
import img3 from "../images/carrusel3.jpeg";
import "./Carrusel.css";

function Carrusel() {
    const imagenes = [img1, img2, img3];
    const [indiceActual, setIndiceActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceActual((prevIndice) =>
                prevIndice === imagenes.length - 1 ? 0 : prevIndice + 1
            );
        }, 3000);

        return () => clearInterval(intervalo);
    }, [imagenes.length]);

    return (
        <div className="carrusel-container">
            <div className="carrusel-inner">
                <img 
                    src={imagenes[indiceActual]} 
                    alt={`Slide ${indiceActual}`} 
                    className="carrusel-imagen"
                />
            </div>
            
            <div className="carrusel-puntos">
                {imagenes.map((_, index) => (
                    <span 
                        key={index} 
                        className={`punto ${index === indiceActual ? "activo" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carrusel;