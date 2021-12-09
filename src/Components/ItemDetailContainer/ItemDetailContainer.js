import { getDoc } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../Firebase/index";
import { doc } from "@firebase/firestore";
import Loading from "../Loading/Loading"

const ItemDetailContainer = ({ setContador, contador }) => {
    const [ropa, setRopa] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        getDoc(doc(db, "products", id)).then((snapshot) => {
            const produ = {
                id: snapshot.id, ...snapshot.data()
            }
            setRopa(produ);
        });
    }, [id]);

    if(ropa.length === 0){
        return (<Loading/>)
    }

    return <>
        <ItemDetail ropa={ropa} setContador={setContador} contador={contador} />
    </>
}

export default ItemDetailContainer