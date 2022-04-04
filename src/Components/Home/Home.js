import React from 'react';

import Watch from "../../images/post_1_3312.jpg"

import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='homepart'>
                <div className="container">
                
                    <div className="row">
                        

                        <div className="col-md-6">

                            <h1>Buy Our New Hublot Watches</h1>


                            
                        </div>

                        <div className="col-md-6 img-fluid ">

<img src={Watch} alt="" />
                        </div>
                </div>
                </div>  




        </section>
    
        </div>
    );
};

export default Home;