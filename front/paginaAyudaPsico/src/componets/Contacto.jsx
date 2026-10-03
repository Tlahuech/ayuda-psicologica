import React from "react";
import "./Contacto.css"
import { useState } from "react";


function Contacto(){

    const [email,setEmail] = useState('');
    const [comentario,setComentario] = useState('');
    const [tel,setTel] = useState('');



const handleSubmit = async (e) => {

        e.preventDefault();

        const datos = {
            email: email,
            comentario: comentario,
            tel: tel
        };

        try {

            const response = await fetch(
                "http://localhost:8080/API2/guardarComentario",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(datos)
                }
            );

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.text();

            console.log("Respuesta del servidor:", data);

            alert("Mensaje enviado correctamente");

                setEmail('');
                setComentario('');
                setTel('');




        } catch (error) {

            console.error("Error al enviar los datos:", error);

            alert("No se pudo enviar el mensaje");
        }
    };

   

    return (
        <div className="wrapperContactoBody">  
            <div className="whrapper">
                <div className="whrapperTit">
                    <h1 >
                        Contactanos
                    </h1>
                    <p>Si tienes algun conocido o quieres ayudar puedes contactarnos sin costo alguno</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <label htmlFor="email" className="form-label">Correo</label>
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="usuario@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">

                        <label htmlFor="tel" className="form-label">Telefono de contacto</label>
                        <input type="number" 
                        className="form-control" 
                        id="tel" 
                        placeholder="5511223344" 
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="comentario" className="form-label">Compartenos tu opinion</label>
                        <textarea className="form-control" 
                        id="comentario" rows="3" 
                        placeholder="Ingrese que tipo de ayuda necesitas"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="botonEnviar">
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contacto;