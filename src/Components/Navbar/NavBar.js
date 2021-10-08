
import './NavBar.css'
import logot from "../../assets/img/logo.jpg"

const NavmyRopa = () => {
    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
                <img src={logot} className='appLogo logo' alt='logo'/>
            
            <div class="container-fluid">
                <a class="navbar-brand" href="dangerouslySetInnerHTML">MyRopa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="dangerouslySetInnerHTML">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dangerouslySetInnerHTML">Sucursales</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dangerouslySetInnerHTML">Contacto</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="dangerouslySetInnerHTML" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menú
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="dangerouslySetInnerHTML">Remeras</a></li>
                                <li><a class="dropdown-item" href="dangerouslySetInnerHTML">Pantalones</a></li>
                                <li><a class="dropdown-item" href="dangerouslySetInnerHTML">Accesorios</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">$0</a>
                        </li>
                        <li class="nav-item">
                            <form class="d-flex buscar">
                                <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"></input>
                                <button class ="btn btn-outline-success" type ="submit">Buscar</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>;
}

export default NavmyRopa;