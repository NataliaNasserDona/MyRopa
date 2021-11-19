import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { productos } from "../../assets/Productos/Productos";
import { useParams } from "react-router";
import "./ItemListContainer.css"
import { db} from "../../Firebase/index.js"
import { collection, getDocs, query, where } from 'firebase/firestore'
import Categoria from "../../assets/Categorias/Categoria";
import { doc } from "@firebase/firestore";
import { getFirestore } from "../../Firebase/index";

const ItemListContainer = () => {

    const [prod, setProd] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
    const db = getFirestore();

        if (!categoria) {
            getDocs(collection(db, 'products')).then((snapshot) => {
                const produc = snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProd(produc)
            }).catch((error) => {
                console.console.error('Error', error)
            })
            return (() => {
                setProd([])
            }, [categoria])
        }
        else {
            getDocs(query(collection(db, "products"), where("categorias", "==", categoria))).then((querySnapshot) => {
                const produc = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProd(produc)
            }).catch((error) => {
                console.console.error('Error', error)
            })
        }
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



// const q = query(collection(db, "Product").where("productos", "==", Categoria)).then((snapshot) => {
        //     const products = querySnapshot.docs.map((doc) => {
        //         return { id: doc.id, ...doc.data() }
        //     })
        //     setProd(products)
        // }).catch((error) => {
        //     console.log('Error', error)
        // })
        // return (() => {
        //     setProd([])
        // })
        // }
        // getDocs(query(collection(db, 'Productos'), where('categorias', '==', Categoria))).then((querySnapshot) => {
        //     const products = querySnapshot.docs.map((doc) =>{
        //         return {id: doc.id, ...doc.data()}
        //     })
        //     setProd(products)
        // }).catch((error) => {console.log('Error', error)})
        // return (() => {
        //     setProd([])
        // })