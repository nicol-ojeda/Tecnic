import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white-tertiary text-center">
            <div className="container-fluid">
                <a href="index.html"><img src="Logo TECNIC.png" className="logo" alt="Logo TECNIC" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TECNOLOGIA
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="relojes.html">Relojes</a></li>
                                <li><a className="dropdown-item" href="audifonos.html">Audifonos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ACCESORIOS
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="accereloj.html">Accesorios reloj</a></li>
                                <li><a className="dropdown-item" href="acceaudio.html">Accesorios audifonos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="combos.html">COMBOS</a>
                        </li>
                    </ul>
                    <div className="iniciose">
                        <a href="registrarse.html"><img src="iniciose.png" alt="Registro" /></a>
                    </div>
                    <div className="nav-item text-indent">
                        <a href="carritocompra.html"><img src="bolsita.png" alt="Carrito de compra" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
