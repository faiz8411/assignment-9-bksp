import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <div>
            <div className="footer-container">
                <div className="container d-flex">
                    <div className="row ">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>BKSP</h1>

                            </div>
                            <p className="mt-4 ">
                                <small>
                                    *Bangladesh Institute of Sports Education) is the national sports institute of Bangladesh.
                                </small>
                            </p>

                            <p className="mt-5">
                                <small> যুব ও ক্রীড়া মন্ত্রণালয়-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার © . All rights reserved.</small>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-container">
                            <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">All events</li>
                                <li className="footer-menu"> coaches</li>
                                <li className="footer-menu">Contact us</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">
                            <h3>More informationt about addmission</h3>
                            <input
                                className="footer-input"
                                type="text"
                                placeholder="Enter Email"
                            />
                            <div className="phone d-flex align-items-center justify-content-center mt-4">

                                <div>
                                    <h5> phone:+880177633256</h5>
                                </div>
                            </div>
                            <div className="map d-flex align-items-center justify-content-center">

                                <div>
                                    <p>
                                        Address: BKSP, 1345
                                        <br /> Dhaka ,Savar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;