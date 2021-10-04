import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            
            <section className="home-banner">
                <Container style={{height:'540px'}} className="d-flex justify-content-evenly text-white align-items-center ">

                <div className="w-50">
                    <h1 className="fw-bold">IBM Data Analyst Professional Certificate </h1>
                    <p>Unlock your potential in data analytics. Build job-ready skills for an in-demand career as a data analyst. No degree or prior experience required.</p>

                    <p>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star-half-alt text-warning"></i>
                    
                    
                    </p>
                    <button type="button" class="btn btn-outline-danger fw-bold fs-4 mt-5">Enroll Now Free</button>
                    <p className="mt-2"><i class="fas fa-user-check me-2"> </i>33,443 already enrolled</p>

                </div>
                <div className="w-50">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d9/0d7c51354a48d2af08be185b6dcbc2/IBM-Logo-White.png?auto=format%2Ccompress&dpr=1&h=70" alt="" />



                </div>

                </Container>

            </section>

            
        </div>
    );
};

export default Home;