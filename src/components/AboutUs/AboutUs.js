import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './AboutUs.css'
import about from '../../images/about us/Brig-Gen-AKM-Aminul-Haque.png'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import about2 from '../../images/about us/sharif.jfif'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="mt-3">
            <Header></Header>
            <Row xs={1} md={2} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50" src={about} />
                        <Card.Body>
                            <Card.Title>পরিচালক (প্রশিক্ষণ) <br /> Brigadier General A K M Majharul Haq <br /> afwc, psc, lsc, Mphil <br />email:majharhuq28@gmail.com </Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="w-50" src={about2} />
                        <Card.Body>
                            <Card.Title>অধ্যক্ষ <br />
                                লেঃ কর্নেল মোঃ ইকবাল হোসেন <br />
                                email:principal@bksp.gov.bd</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <div className="about text-white mb-5">
                <div>

                    <h4> 1.উপপরিচালক (প্রশাসন) <br /> জনাব মোঃ ছগির হোসেন <br />email:dda@bksp.gov.bd</h4>
                </div>
                <div>

                    <h4>2.উপপরিচালক (ক্রীড়া বিজ্ঞান) <br /> ডাঃ মোঃ এমাদুল হক<br />email:drehaquebksp@gmail.com</h4>
                </div>
                <div>

                    <h4>3.উপপরিচালক (প্রশিক্ষণ) <br /> জনাব উজ্জল চক্রবর্তী<br />email:uzzal_football@yahoo.com</h4>
                </div>
                <div>

                    <h4>4.সিনিয়র গবেষণা কর্মকর্তা <br /> নুসরাৎ শারমিন <br />email:nusratsharmeen1975@gmail.com</h4>
                </div>

            </div>
            <Link to="/home">
                <button className="about-btn">HOME</button>
            </Link>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;