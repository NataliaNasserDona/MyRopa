import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { productos } from "../../assets/Productos/Productos";
import { useParams } from "react-router";
import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [prod, setProd] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const list = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        });
        list.then(
            list => {
                setProd(list)
                if (!categoria) {
                    setProd(list)
                }
                else {
                    const catProd = list.filter(produ => produ.categoria.toLowerCase() === categoria)
                    setProd(catProd)
                }
            }
        )
        return (() => {
            setProd([])
        })
    }, [categoria])


    return (<>

        {(!categoria) ?
            <div>
                <h1 className="welcome"><b>Bienvenido a MyRopa</b></h1>
            </div>
            :
            <div>
                <h1>{categoria}</h1>
            </div>
        }
        <ItemList prod={prod} />
    </>)
}

export default ItemListContainer