import "./NavBar.css"
import logot from "../../assets/img/logonat.png"
import CartWidget from '../CartWidget/CartWidget.js';
import Categoria from "../../assets/Categorias/Categoria.js"
import { NavLink, Link } from 'react-router-dom';

const NavmyRopa = ({ contador, setContador }) => {

    return <>
        <nav className="navbar navbar-expand-sm navbar-light navStyle">

            <Link to={`/`} className="btn"><img src={logot} className='appLogo logo' alt='logo' /></Link>

            <div className="container-fluid">
                <NavLink to={`/`} className="btn items"><b>MyRopa</b></NavLink>
                <div className="collapse navbar-collapse items" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/sucursales`} className="btn"><b>Sucursales</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/contacto`} className="btn"><b>Contacto</b></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="dangerouslySetInnerHTML" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menú
                            </a>
                            <ul className="dropdown-menu itemsMenu" aria-labelledby="navbarDropdownMenuLink">
                                {Categoria.map(categ =>
                                    <NavLink to={`/category/${categ.categoria}`} key={categ.id} className="dropdown-item" >
                                        <li>{categ.categoria}</li>
                                    </NavLink>)
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget contador={contador} setContador={setContador}/>
        </nav>
    </>;
}

export default NavmyRopa;