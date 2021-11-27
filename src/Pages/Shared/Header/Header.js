import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, LogOut } = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary bg-opacity-50">
                <div className="container-fluid">
                    <NavLink classNameName="p-1 " to="/Home"><h2><i className="far fa-eye animate__animated animate__fadeIn text-white "></i></h2></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="links" to="/Home" >Home</NavLink>
                            </li>
                            <li classNameName="nav-item">
                                <NavLink className="links" to="/More">Services</NavLink>                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="links" to="/Contact">Contact</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="links" to="/Doctor">Doctors</NavLink>                            </li>
                        </ul>
                        {
                            !user.email ? <NavLink className="links" to="/Login"><button className="btn btn-primary">Login</button></NavLink>
                                : <button onClick={LogOut} className="btn btn-danger me-3">Logout</button>

                        }
                        {
                            user.photoURL ? <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src={user.photoURL} alt="" />
                                : <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" }} src="./images/user.jpg" alt="" />
                        }
                        <h3>{user.displayName}</h3>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;