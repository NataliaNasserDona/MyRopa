import "./ItemCount.css"
import mas from "../../assets/img/mas.png"
import menos from "../../assets/img/menos.png"
import React from 'react';

const ItemCount = ({stock, valCarro, setValCarro}) => {
    
    const resta = () => {
        if (valCarro > 0) { setValCarro(valCarro - 1); };
    };

    const suma = () => {
        if (valCarro < stock) { setValCarro(valCarro + 1); };
    };

    return <>
        <div className="container centrar col-sm-4 pad">
            <div className="row col-sm-12 fa">
                <img src={menos} className="col-sm-2 botones" onClick={resta} alt="signo +"/>
                <h2 className="col-sm-6">{valCarro}</h2>
                <img src={mas} className="col-sm-2 botones" onClick={suma} alt="signo -"/>
            </div>
            
        </div>
    </>;
}

export default ItemCount;