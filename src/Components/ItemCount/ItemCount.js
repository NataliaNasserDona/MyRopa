import "./ItemCount.css"
import React, {useState} from 'react';

const ItemCount = ({stock, valCarro, setValCarro}) => {
    
    const resta = () => {
        if (valCarro > 0) { setValCarro(valCarro - 1); };
    };

    const suma = () => {
        if (valCarro < stock) { setValCarro(valCarro + 1); };
    };

    // const resp = () => {
    //     setContador(valCarro + contador);
    //     setCarro(true);
    // };

    return <>
        <div className="container centrar col-sm-4 pad">
            <div className="row col-sm-12 fa">
                <button type="button" class="btn btn-outline-info col-sm-2" onClick={resta}> - </button>
                <h2 className="col-sm-6">{valCarro}</h2>
                <button type="button" class="btn btn-outline-info col-sm-2" onClick={suma}> + </button>
            </div>
            
        </div>
    </>;

}

export default ItemCount;