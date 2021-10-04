import React from 'react';
import './MenuBar.css'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/bksp-logo.png'

const MenuBar = () => {
    return (
        <div className="MenuBar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <img className="w-75" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/allevents" className="items">
                                    <li>All Events</li>
                                </Link>
                                <Link to="coaches" className="items">
                                    <li>Coaches</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;