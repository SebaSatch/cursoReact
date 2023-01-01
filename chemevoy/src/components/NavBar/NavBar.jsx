import logo from "../../assets/logo2-svg.svg"
import CartContainer from "../CartWidget/CartContainer"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"



const NavBar = () => {
  return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                       <Link className="nav-link" to="/" href="#"> Todos los Id </Link>
                    </li>
                    <li className="nav-item">
                         <NavLink className="nav-link" to="/categoria/:id" href="#"> Argentina </NavLink>
                    </li>
                    {/* <li className="nav-item">
                            <a className="nav-link" href="#">Quienes somos?</a>
                    </li>
                    <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                    </li> */}
                    <li className="nav-item">
                            <CartContainer></CartContainer>
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
