import React from 'react';
import { Col, Row } from 'react-bootstrap';
import poster from './elearnposter.png'

const About = () => {
    return (
        <Row lg={2} md={1} sm={1} className="container mx-auto align-items-center m-5 shadow-lg" style={{}}>

           <Col><img src={poster} alt="" /></Col> 
           <Col>
           <p className="fs-5" style={{textAlign:'justify'}}>

           E-learning was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, E-learning is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. E-learning received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all. <br />

           82 million learners, 100+ Fortune 500 companies, and more than 6,000 campuses, businesses, and governments come to E-learning to access world-class learning—anytime, anywhere.
           </p>
           
           
           
           </Col>

    
        </Row>
    );
};

export default About;