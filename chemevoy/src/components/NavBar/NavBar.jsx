import logo from "../../assets/logo2-svg.svg"
import CartWidget from "../CartWidget/CartWidget"
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
                       <Link className="nav-link" to="/" href="#"> Destinos </Link>
                    </li>
                    <li className="nav-item">
                         <NavLink className="nav-link" to="/categoria/:id" href="#"> Only Peronia </NavLink>
                    </li>
                    <li className="nav-item">
                            <CartWidget></CartWidget>
                    </li>
                </ul>   
                </div>
            </div>
            </nav>
         </div>
    )
}

export default NavBar
