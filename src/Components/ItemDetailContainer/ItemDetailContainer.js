import {useState, useEffect} from "react";
import {useParams} from "react-router";
import { productos } from "../../assets/Productos/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({setContador}) => {
    const [ropa, setRopa] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const list = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            }, 2000)
        });

        list.then(list => {     //cada objeto del array de los productos
                const newDetail = list.find(ropa => ropa.id === id)
                  
                setRopa(newDetail)
                },
                   
            );
    }, [id]);


    return <>
    <ItemDetail ropa={ropa} setContador={setContador}/>
    </>

}

export default ItemDetailContainer