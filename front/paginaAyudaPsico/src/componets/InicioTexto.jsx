import React from "react";
import "./InicioTexto.css";
import img3 from "../images/logo.png";

function InicioTexto() {

    return (
        <div className="wrapperTexto">

            <p>
                Brindamos asesoría y orientación gratuitas.
                Nuestros psicólogos trabajan con diversos
                modelos terapéuticos que te permiten expresar,
                conocer y reconocer tus propios recursos para
                adaptarte a las diversas situaciones cotidianas.

                <br /><br />

                Brindamos asesoría y orientación gratuitas.
                Nuestros psicólogos trabajan con diversos
                modelos terapéuticos que te permiten expresar,
                conocer y reconocer tus propios recursos para
                adaptarte a las diversas situaciones cotidianas.

                <br /><br />

                Brindamos asesoría y orientación gratuitas.
                Nuestros psicólogos trabajan con diversos
                modelos terapéuticos que te permiten expresar,
                conocer y reconocer tus propios recursos para
                adaptarte a las diversas situaciones cotidianas.
            </p>

            <img
                src={img3}
                alt="Logo MenteSer"
            />

        </div>
    );
}

export default InicioTexto;