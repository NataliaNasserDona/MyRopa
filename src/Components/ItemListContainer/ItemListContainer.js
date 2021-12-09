import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getFirestore } from "../../Firebase/index";
import Loading from "../Loading/Loading"

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
                console.error('Error', error)
            })
            return (() => {
                setProd([])
            })
        }
        else {
            getDocs(query(collection(db, 'products'), where('categoria', '==', categoria))).then((querySnapshot) => {
                const produc = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProd(produc)
            }).catch((error) => {
                console.error('Error', error)
            })
        }
        return (() => {
            setProd([])
        })
    }, [categoria])

    if(prod.length === 0){
        return (<Loading />)
    }

    return (<>
        {(!categoria) ?
            <div>
                <h1 className="welcome"><b>Bienvenido a MyRopa</b></h1>
            </div>
            :
            <div>
                <h1 className="welcome"><b>{categoria}</b></h1>
            </div>
        }
        <ItemList prod={prod} />
    </>)
}

export default ItemListContainer