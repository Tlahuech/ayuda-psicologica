import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function MenuNavegacion() {

        const [menuAbierto, setMenuAbierto] = useState(false);
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

                {/* LOGO */}
                <Link to="/inicio" className="navbar-brand">
                    <img
                        alt="logo"
                        src={Logo}
                        width={50}
                    />
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-controls="menuPrincipal"
                    aria-expanded={menuAbierto}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* MENÚ */}
               <div
                    className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}
                    id="menuPrincipal"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/inicio"
                                onClick={() => setMenuAbierto(false)}
                            >
                                INICIO
                            </Link>
                        </li>


                        <li className="nav-item">
                           <Link
                                className="nav-link"
                                to="/ayuda"
                                onClick={() => setMenuAbierto(false)}
                            >
                                AYUDA
                            </Link>
                        </li>


                        <li className="nav-item">
                           <Link
                                className="nav-link"
                                to="/contacto"
                                onClick={() => setMenuAbierto(false)}
                            >
                                CONTACTO
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default MenuNavegacion;