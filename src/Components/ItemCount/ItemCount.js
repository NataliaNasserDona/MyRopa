import "./ItemCount.css"
import React, {useState} from 'react';



const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    const resta = () => {
        if (count > 0) { setCount(count - 1); };
    };

    const suma = () => {
        if (count < stock) { setCount(count + 1); };
    };


    return <>
        <div className="container centrar col-sm-4 pad">
            <div className="row col-sm-12 fa">
                <button type="button" class="btn btn-outline-info col-sm-2" onClick={resta}>- </button>
                <h2 className="col-sm-6">{count}</h2>
                <button type="button" class="btn btn-outline-info col-sm-2" onClick={suma}>+ </button>
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </>;

}

export default ItemCount;