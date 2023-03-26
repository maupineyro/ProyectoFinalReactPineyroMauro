import React from 'react';
import logo from "../../logo.svg"
import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <NavLink to={'/'} className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /> REACTIVE </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link active" aria-current="page">Catálogo</NavLink>
                            </li>
                            <li className="nav-item" >
                                <NavDropdown title="Categorías" id="navbarDropdown">
                                    <NavDropdown.Item as='span'><NavLink to='/category/hombre' >Hombre</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item as='span'><NavLink to='/category/accesorios' >Accesorios</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item as='span'><NavLink to='/category/electrónica' >Electrónica</NavLink></NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/cart' className="nav-link" >
                                    <CartWidget />
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>





        </div>
    )
}

export default NavBar