import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MenuBar from '../MenuBar/MenuBar';
import './AllEvent.css'


const AllEvent = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className=" details-container">
            <Header></Header>


            <div className="teams mt-5 mb-4">
                <h1 className="text-white">our services:</h1>
                <div className="row">
                    {events?.map((data) => (
                        <div className="col-md-4 all-event">
                            <div className="cart">
                                <div className="cart-details">
                                    key={data.id}
                                    <img className="w-100 h-80" src={data.img} alt="" />
                                    <h2 className="text-success">carreer build in {data.name}</h2>
                                    <h3 className="text-white">coach name:{data.coaches}</h3>
                                    <h4 className="text-success">monthly fee:{data.Fee} tk</h4>
                                    <h4 className="text-white">practise time:{data.schedule}</h4>
                                    <h4 className="text-warning">admission for class :{data.class}</h4>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Link to="/home">
                <button className="about-btn">HOME</button>
            </Link>
            <Footer></Footer>
            <Footer></Footer>
        </div>
    );
};

export default AllEvent;