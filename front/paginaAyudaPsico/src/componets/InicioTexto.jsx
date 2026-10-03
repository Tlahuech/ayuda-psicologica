import React from "react";
import "./InicioTexto.css";
import img3 from "../images/logo.png";

function InicioTexto() {
  return (
    <div className="wrapperTexto">
      <p>
        MenteSer es un espacio creado para facilitar el acceso a información
        relacionada con el bienestar emocional y la orientación psicológica. Su
        objetivo es proporcionar información clara que permita conocer
        diferentes alternativas de apoyo y comprender mejor la importancia de
        cuidar la salud emocional.
        <br />
        <br />
        La orientación psicológica puede ayudar a las personas a identificar y
        comprender situaciones que afectan su bienestar emocional. A través del
        acompañamiento profesional es posible desarrollar herramientas para
        afrontar cambios, dificultades cotidianas y diferentes experiencias
        personales.
        <br />
        <br />
        En MenteSer se presenta información relacionada con distintos enfoques y
        modelos terapéuticos utilizados en psicología. Conocer estas
        alternativas permite tener una visión general de las diferentes formas
        en que puede abordarse una situación y facilita la búsqueda de
        orientación adecuada.
      </p>

      <img src={img3} alt="Logo MenteSer" />
    </div>
  );
}

export default InicioTexto;
