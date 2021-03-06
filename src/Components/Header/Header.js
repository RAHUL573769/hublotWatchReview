import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar-dark bg-dark shadow'>
            <div className="container">

                <div className="row">

                    <div className="col-md-12">
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
                          
                                
                                <Link class="navbar-brand" to={'/'} > Hublot Watch</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
                                          
                                    <Link class="nav-link" to={'/review'} >Reviews</Link>     
                                            
        </li>
        <li class="nav-item">
                                            
                                            
                                                         <Link class="nav-link" to={'/dashboard'} >Dashboard</Link>
        </li>
        <li class="nav-item">
                                        
                                            
                                                         <Link class="nav-link" to={'/blogs'} >Blogs</Link>
        </li>
        <li class="nav-item">
                                           
                                                         <Link class="nav-link" to={'/about'} >About</Link>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>

                    </div>
                </div>
            </div>
   
        </div>
    );
};

export default Header;