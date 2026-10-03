import React, { useState } from "react";
import "./Ayuda.css";


function Ayuda() {

    const[preguntaAbierta,setPreguntaAbierta] = useState(null);

    return (
        <div className="contenedorAyuda">

            <h1>Preguntas frecuentes</h1>

            <div className="preguntas">

                <button className="pregunta"
                onClick={() => setPreguntaAbierta(0)}
                >
                    <span>¿Cómo funciona MenteSer?</span>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 0 && (
                    <div className="respuesta">
                        <p>
                            MenteSer es una plataforma dedicada a
                            brindar orientación y apoyo psicológico.
                        </p>
                    </div>
                )}

                <button className="pregunta"
                onClick={() => setPreguntaAbierta(1)}>
                    <span>¿Cómo puedo solicitar ayuda?</span>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 1 &&(

                    <p>MenteSer ofrece información y orientación
                        relacionada con diferentes necesidades de apoyo
                        psicológico.</p>
                )}

                <button className="pregunta"
                onClick={()=> setPreguntaAbierta(2)}
                >
                    <span>¿Qué servicios ofrecen?</span>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 2 &&(
                    <p>Puedes comunicarte con nosotros desde la sección
                        de Contacto.</p>
                )}

                <button className="pregunta"
                onClick={()=> setPreguntaAbierta(3)}
                >
                    <span>¿Cómo puedo contactar?</span>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 3 && (
                    <p>Consulta la información disponible en la sección
                        de servicios para conocer las condiciones de
                        atención.</p>
                )}

                <button className="pregunta"
                onClick={()=> setPreguntaAbierta(4)}
                >
                    <samp>¿Es necesario registrarme para recibir orientación?</samp>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 4 && (
                    <p>Actualmente puedes consultar la información disponible en MenteSer sin necesidad de registrarte. 
                        Para solicitar determinados servicios, consulta las opciones disponibles en la plataforma.</p>
                )}

                <button className="pregunta"
                onClick={()=> setPreguntaAbierta(5)}
                >
                    <samp>¿Qué tipo de apoyo puedo encontrar?</samp>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 5 && (
                    <p>MenteSer ofrece información y orientación relacionada con diferentes situaciones emocionales y necesidades de
                         apoyo psicológico.</p>
                )}

                
                <button className="pregunta"
                onClick={()=> setPreguntaAbierta(6)}
                >
                    <samp>¿Puedo contactar directamente a un psicólogo?</samp>
                    <span>▼</span>
                </button>

                {preguntaAbierta === 6 && (
                    <p>Puedes consultar la sección de Contacto para conocer las opciones disponibles y obtener información sobre cómo 
                        comunicarte con un profesional.</p>
                )}









            </div>

        </div>
    );
}

export default Ayuda;