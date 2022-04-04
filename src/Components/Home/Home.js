import React, {  useState } from 'react';


import Watch from "../../images/post_1_3312.jpg"

import ratingsData from "../../fakeData/fakeData" 

import './Home.css'
import Review from '../Review/Review';

const Home = () => {

    const [watches, setWatches] = useState(ratingsData);

   
  
    
    return (
        <div>
            <section className='homepart'>
                <div className="container">
                
                    <div className="row">
                        

                        <div className="col-md-6">

                            <h1>Buy Our New Hublot Watches</h1>
                            <h4>Our Hublot Watches are best </h4>
                            <h4>in the world</h4>

                            
                        </div>

                        <div className="col-md-6 img-fluid ">

<img src={Watch} alt="" />
                        </div>
                    </div>
                    <button className='btn btn-primary'>Show Live Prgress</button>
                </div>  




            </section>


            {/* CustomerReview (3) */}


            <section className='section bg-light border-top'>

                <div className='container'>
                    <div className="row">
                        
                            <div className="col-md-12 ">
                            <h3 className='text-center'> Our Customer's Review(3)</h3>
                            <div className="underline mx-auto"></div>

                            <div className='homecard '>
                 {
                              
                                watches.slice(0,3).map((watch) => (
                                    
                                    <p>Name :{watch.name}
                                    
                                        <p>   Id:{watch.id}</p>
                                        <p>  Description :{watch.description}</p>
                                        
                                        <p>Ratings:{ watch.ratings }</p>
                                  
                                    </p>
                                    
                                 
                                 
                                 ))
} 
            

                            </div>
                        
                        </div>
                        
                        <button className='btb btb-lg'>See All Reviews</button>
                  </div>
</div>


            </section>
    
        </div>
    );
};

export default Home;