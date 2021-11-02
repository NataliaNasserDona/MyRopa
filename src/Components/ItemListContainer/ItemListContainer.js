import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { productos } from "../../assets/Productos/Productos";



const ItemListContainer = ({ setContador }) => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        const list = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)}, 2000)
        });
        list.then(
                list => {
                    setProd(list);
                },
                console.log(list)
            );
    }, []);

    // const onAdd = (numero) => {
    //     setContador(numero);
    // };

    return (<>
        <h1>Bienvenido a MyRopa</h1>
        <h2>En Proceso...</h2>

        <ItemList prod={prod} />
    </>)
}

export default ItemListContainer