import React from 'react';

const ProductSection = () => {
    return (
        <div className="nprod">
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">NUESTROS PRODUCTOS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="relojes.html">
                            <img src="relojes1.png" className="rounded-circle img-fluid border" alt="Relojes" />
                        </a>
                        <h5 className="text-center mt-3 mb-3">RELOJES</h5>
                        <p className="text-center">
                            <a className="btn btn-primary" href="relojes.html">Mirar</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="accereloj.html">
                            <img src="accesorios1.png" className="rounded-circle img-fluid border" alt="Accesorios" />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">ACCESORIOS</h2>
                        <p className="text-center">
                            <a className="btn btn-primary" href="accereloj.html">Mirar</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="combos.html">
                            <img src="combos1.png" className="rounded-circle img-fluid border" alt="Combos" />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">COMBOS</h2>
                        <p className="text-center">
                            <a className="btn btn-primary" href="combos.html">Mirar</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductSection;
