import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";


const productos = [
    { id: "0000", precio: 500, nombre: "Camiseta Techno", img: "https://www.dhresource.com/0x0/f2/albu/g7/M00/41/B5/rBVaSlud9sWADYIsAABkNQZvq_U885.jpg" },
    { id: "0001", precio: 500, nombre: "Camisa Cuadros", img: "https://http2.mlstatic.com/D_NQ_NP_931732-MLA42205436841_062020-O.webp" },
    { id: "0002", precio: 1000, nombre: "Jean", img: "https://thalassodenim.com/wp-content/uploads/2019/05/SH_THALASSO534-1.jpg" },
    { id: "0003", precio: 2000, nombre: "Pantalon engomado", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/163/183/products/8c88fde4-3b4a-48eb-ad71-22ecc11e2fa51-329b612b0d54c9a2e816233523502712-1024-1024.jpeg" },
    { id: "0004", precio: 800, nombre: "Short Pollera", img: "https://dev-drupal.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/8m6a2782_1557174062.jpg?itok=dethrrBB" }
];

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



    const onAdd = (numero) => {
        setContador(numero);
    };

    return (<>
        <h1>Bienvenido a MyRopa</h1>
        <h2>En Proceso...</h2>

        <ItemCount stock='5' onAdd={onAdd} />
        <ItemList prod={prod} />
    </>)
}






export default ItemListContainer