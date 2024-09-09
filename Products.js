import React from 'react';

const Products = () => {
    return (
        <div className="row row-cols-5 row-cols-md-5 g-1">
            <div className="col">
                <div className="card1">
                    <img src="relojes1.1.png" className="card-img-top" alt="Reloj zen" />
                    <div className="card-body">
                        <h5 className="card-title">Reloj zen</h5>
                        <p className="card-text">$170.000</p>
                        <a href="#" className="btn btn-primary">¡Comprar!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card2">
                    <img src="audifonos1.png" className="card-img-top" alt="Audifonos Lotso" />
                    <div className="card-body">
                        <h5 className="card-title">Audifonos Lotso</h5>
                        <p className="card-text">$85.000</p>
                        <a href="#" className="btn btn-primary">¡Comprar!</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card3">
                    <img src="combos1.1.png" className="card-img-top" alt="Combo flash" />
                    <div className="card-body">
                        <h5 className="card-title">Combo flash</h5>
                        <p className="card-text">$200.000</p>
                        <a href="#" className="btn btn-primary">¡Comprar!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
