import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="box1">
                <div className="container">
                    <div className="row">
                        <h2 className="h2 text-black">TECNIC</h2>
                        <ul className="list-unstyled text-black footer-link-list">
                            <hr />
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                Contactanos: 319 000 0000
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <a className="text-decoration-none" href="mailto:info@company.com">nicoll.ojeda@uniminuto.edu.co</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="box2">
                <div className="container">
                    <div className="row pt-1">
                        <div className="col-10">
                            <p className="text-left text-black">
                                Copyright &copy; | Todos los derechos reservados
                                Designed by Nicoll Ojeda
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
