import logo from "../../assets/logo2-svg.svg"
import cart from "../../assets/carticon.svg"


const NavBar = () => {
  return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                         <a className="nav-link"  href="#">Paquetes</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link"  href="#">Promociones</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#">Quienes somos?</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#" > <img src={cart} alt="" /></a>
                    </li>
                    

                    {/* <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
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