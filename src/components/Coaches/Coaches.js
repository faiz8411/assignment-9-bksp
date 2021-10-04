import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import coach from '../../images/coaches/Salauddin1444043943.jpg'
import coach2 from '../../images/coaches/maruful-1539968640558.jpg'
import coach3 from '../../images/coaches/sarwar-imran-798c58de-920a-4b43-8809-8149d2e3c56-resize-750.webp'
import './Coaches.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Coaches = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-white">Our honorable coaches:</h1>
            <CardGroup className="mt-5 mb-3">
                <Card>
                    <Card.Img variant="top" src={coach} />
                    <Card.Body>
                        <Card.Title>Mohammad Salahuddin</Card.Title>
                        <Card.Text className="coch-text">
                            Mohammad Salahuddin is a Bangladeshi cricket coach and former assistant coach of the Bangladesh and Singapore national cricket teams. A graduate of Jahangirnagar University, he played domestic cricket for six years until injury ended his career and he became a part-time coach in 1997.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={coach2} />
                    <Card.Body>
                        <Card.Title>Maruful Haque </Card.Title>
                        <Card.Text className="coch-text">
                            Maruful Haque is a Bangladeshi professional football coach and former player, who is currently the interim head coach of Bangladesh U23 national team. He is appointed ahead of the 2022 AFC U-23 Asian Cup qualification after the sacking of Jamie Day in September 2021
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={coach3} />
                    <Card.Body>
                        <Card.Title>Sarwar Imran</Card.Title>
                        <Card.Text className="coch-text">
                            Sarwar Imran is a Bangladeshi cricket coach. He was head coach of BKSP from 1987 to 1997. He started his coaching career in 1984 and from then he played the role of head coach of various teams in premier division cricket, the main domestic ODI competition in Bangladesh.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
            <Link to="/home">
                <button className="about-btn">HOME</button>
            </Link>
            <Footer></Footer>

        </div>
    );
};

export default Coaches;