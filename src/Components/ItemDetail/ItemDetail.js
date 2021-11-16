import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext"

// import { collection, getDoc } from "@firebase/firestore";
// import { getFirestore } from "@firebase/firestore";
// import { doc} from "@firebase/firestore";


const ItemDetail = ({ ropa, setContador, contador}) => {

    const [carro, setCarro] = useState(false);
    const [valCarro, setValCarro] = useState(0);
    const { addItem } = useContext(CartContext)

    const onAdd = () => {
        setContador(contador + valCarro);
        setCarro(true);
        addItem(ropa, valCarro)
    }

    // useEffect = ( {

    // },[valCarro])

    return <>
        <div className="col-sm-12 row every">
            <div className="col-sm-6 tamimg">
                <img src={ropa?.img} className="card-img-top " alt="..." />
            </div>
            <div className="col-sm-6">
                <h5 className="card-title nombre"><b>{ropa?.nombre}</b></h5>
                <p className="card-text info">{ropa?.info}</p>
                <p className="card-text precio"><b>Precio: </b> ${ropa?.precio}</p>
                {!carro ?
                    <div>
                        <ItemCount stock='5' setCarro={setCarro} carro={carro} valCarro={valCarro} setValCarro={setValCarro}/>
                        <button type="button" class="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>
                        <div><NavLink to="/buy" type="button" class="btn btn-outline-primary" >Comprar</NavLink></div>
                        
                    </div>
                    :
                    <div>
                        <p className="precio">Ya agregaste este producto a tú carrito</p>
                        <NavLink to="/Cart"><button type="button" class="btn btn-info btn-sm">Ir al carrito</button>
                        </NavLink>
                        <NavLink to="/"><button type="button" class="btn btn-secondary btn-sm">Ir al Home</button>
                        </NavLink>
                    </div>
                    

                    
                }
            </div>
        </div>
    </>
}

export default ItemDetail







//PARA TRAER UN SOLO ELEMENTO DE LA COLECCION
    // useEffect(() => {
    //     const db = getFirestore();

    //     const pilusoRef = doc(db, "items", "productos");
    //     getDoc(pilusoRef).then(snapshot);
    //     if(snapshot.exist){
    //         setCarro(snapshot.data())
    //     }
    // }, [productos]);


    //PARA TRAER TODOS LOS ELEMENTOS DE UNA COLECCION
    // useEffect(() => {
    //     const db = getFirestore();

    //     getDoc(db, "items", "productos").then(snapshot);
    //     setCarro(snapshot.docs.map((doc) => doc.data()));
    //     
    // }, []);
