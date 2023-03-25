import React from 'react';
import logo from "../../logo.svg"
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /> REACTIVE </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">Catálogo</Link>
                            </li>

                            <NavDropdown title="Categorías" id="navbarDropdown">
                                <NavDropdown.Item as='span'><Link to='/' >Hombre</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/' >Accesorios</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/' >Electrónica</Link></NavDropdown.Item>
                            </NavDropdown>


                            <li className="nav-item">
                                <CartWidget />
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default NavBar