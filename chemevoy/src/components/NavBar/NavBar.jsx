import logo from "../../assets/logo2-svg.svg"

const NavBar = () => {
  return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                         <a class="nav-link"  href="#">Paquetes</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link"  href="#">Promociones</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" href="#">Quienes somos?</a>
                    </li>
                    <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                    </li>


                    {/* <li class="nav-item dropdown">
                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}
                </ul>   
                </div>
            </div>
            </nav>
         </div>
    )
}

export default NavBar
