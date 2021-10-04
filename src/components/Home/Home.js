import React from 'react';
import Carusel from '../Carusel/Carusel';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carusel></Carusel>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;