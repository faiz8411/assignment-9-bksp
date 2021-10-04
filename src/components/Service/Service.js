import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])
    const servicesSliced = services.slice(0, 4)
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="teams mt-5 mb-3">
            <h1 className="text-white">our services:</h1>
            <div className="row">
                {servicesSliced?.map((service) => (
                    <div className="col-md-4">
                        <div className="cart">
                            <div className="cart-details">
                                key={service.id}
                                <img className="w-100 h-80" src={service.img} alt="" />
                                <h2 className="text-warning">carreer build in {service.name}</h2>
                                <h3 className="text-white">coach name: {service.coaches}</h3>
                                <h3 className="text-white">monthly fee: {service.Fee}</h3>
                                <h3 className="text-success">practise time: {service.schedule}</h3>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Service;