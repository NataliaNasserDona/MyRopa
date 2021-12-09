import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartContext"
import './FrmCompra.css';
import { useHistory } from 'react-router-dom'
import Input from "../../Components/Input/Input"

const FrmCompra = () => {

    const { setBuyer } = useContext(CartContext);

    const [nomApel, setNomApel] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [prov, setProv] = useState("");
    const [calle, setCalle] = useState("");
    const [nCalle, setNCalle] = useState("");
    const [codPostal, setCodPostal] = useState("");

    let history = useHistory();

    const sendFrm = (e) => {
        e.preventDefault();
        const buyerData = {
            nomApel,
            telefono,
            email,
            prov,
            calle,
            nCalle,
            codPostal
        }
        setBuyer(buyerData)
        history.push("/cart")
    }

    return (
        <div>
            <div>
                <h4 className="p marginGral"><b>TERMINE SU COMPRA</b></h4>
                <p className="p marginGral"><b>Ingrese sus datos</b></p>
            </div>
            <div className="frm">
                <form class="row col-sm-10" onSubmit={sendFrm}>

                    <div class="col-sm-5 p">
                        <Input mb="mb-3" type="name" value={nomApel} setValue={setNomApel} label="Nombre y Apellido" pattern="[a-zA-Z]{1,15}" />
                    </div>
                    <div class="col-sm-5 p">
                        <Input mb="mb-3" type="number" value={telefono} setValue={setTelefono} label="Teléfono" />
                    </div>
                    <div class="col-sm-5 p">
                        <Input mb="mb-3" type="email" value={email} setValue={setEmail} label="E-mail" />
                    </div>
                    <div class="col-sm-5 p">
                        <Input mb="mb-3" type="text" value={prov} setValue={setProv} label="Provincia" pattern="[a-zA-Z]{1,15}" />
                    </div>
                    <div class="col-sm-6 p">
                        <Input mb="mb-3" type="adress" value={calle} setValue={setCalle} label="Calle" pattern="[a-zA-Z]{1,15}" />
                    </div>
                    <div class="col-sm-2 p">
                        <Input mb="mb-3" type="number" value={nCalle} setValue={setNCalle} label="N° de Calle" />
                    </div>
                    <div class="col-sm-2 p">
                        <Input mb="mb-3" type="number" value={codPostal} setValue={setCodPostal} label="Código Postal" />
                    </div>
                    <div>
                        <button class="btn btnGuardar" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FrmCompra