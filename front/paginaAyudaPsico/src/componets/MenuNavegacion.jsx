import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function MenuNavegacion() {
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
                    data-bs-toggle="collapse"
                    data-bs-target="#menuPrincipal"
                    aria-controls="menuPrincipal"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* MENÚ */}
                <div
                    className="collapse navbar-collapse"
                    id="menuPrincipal"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/inicio"
                            >
                                INICIO
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/ayuda"
                            >
                                AYUDA
                            </Link>
                        </li>


                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/contacto"
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