import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <div className="notfound">
                <h1 className="text-danger">404</h1>
                <h1 className="text-danger">Page Not Found</h1>
            </div>

            <Link to="/home">
                <button className="about-btn">HOME</button>
            </Link>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;