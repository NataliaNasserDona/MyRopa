import { useState } from "react";

function ItemList() {
    const productos = [
        { id: "jean", precio: 1000, nombre: "Jean" },
        { id: "camiseta", precio: 500, nombre: "Camiseta" }
    ];

    const task = new Promise((resolve, reject) => {
        
        reject("ERROR");
        
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });

    task.then(result => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    const Producto = ({ nombre, precio }) => {
        return (
            <>
                <h2>{nombre}</h2>
                <h3>Precio: ${precio}</h3>
            </>
        )
    }

}

export default function ItemList() {
    const [prod, setProd] = useState(productos);

    return (
        <div className="ItemList">
            {productos.map((producto) => (
                <Producto nombre={producto.name} precio={producto.precio} />
            ))}
        </div>
    )
}

