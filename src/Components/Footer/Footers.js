import React from 'react';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <section className='section footer bg-dark text-white'>


            <div className="container">
                
                <div className="row">

                    <div className="col-md-4">

                        <h6>Hublot Watch Information</h6>
                        <hr />
                        <p>Hublot was also the first watch to ever use a natural rubber strap. The reason that a Hublot is so special is because of its design. The rubber of the bands complements and contrasts the dials of the watch face; the band is made to conform to any wearer's wrist, making it both comfortable and weightless</p>

                    </div>

                    <div className="col-md-4">

                        <h6>Quick Links</h6>
                        <div> <Link class="nav-link" to={'/'} > Home</Link></div>
                        <div>        <Link class="nav-link" to={'/review'} >Reviews</Link>   </div>
                        <div> <Link class="nav-link" to={'/dashboard'} >Dashboard</Link></div>

                        <div>          <Link class="nav-link" to={'/blogs'} >Blogs</Link>
</div>
                    </div>


                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <div className='text-white mb-1'>#45,Dhanmondhi Road,Dhaka,Bangladesh</div>
                        <div className='text-white mb-1'>+9123242422</div>
                        <div className='text-white mb-1'>+880163732838</div>
                        <div className='text-white mb-1'>email@gmail.com</div>

                    </div>
                </div>
</div>


        </section>
    );
};

export default Footers;