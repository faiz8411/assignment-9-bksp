import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'


const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">

                    {/* menu bar use with import*/}
                    <MenuBar></MenuBar>
                    <div className="col-md-6">
                        <h1 className="title">
                            Bangladesh Krira <br />Shikkha Protishtan (BKSP)
                        </h1>
                        <h4 className="text-danger">about</h4>
                        <p className="text-paragrap text-center mt-3">
                            Bangladesh Institute of Sports Education) is the national sports institute of Bangladesh. It is residential and is located at Savar, about 28 kilometres (17 mi) north-west of the capital, Dhaka, and about 8 kilometres (5.0 mi) north of the Sriti Soudho. It is a government-funded autonomous institution.
                        </p>
                        <button className="mt-3 about-btn">admission going on  </button>
                    </div>
                    <div className="col-md-6 text-white">
                        <div>
                            <h1>BEST SPORTS LAERNING ACADEMY FOR:</h1>
                        </div>
                        <div>
                            <ul className="li-part">
                                <li>cricket</li>
                                <li>footbalL</li>
                                <li> badminton</li>
                                <li>shooter</li>
                                <li>swimming</li>
                                <li>athletics</li>
                                <li>kabaddi</li>
                                <li>chess</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Header;