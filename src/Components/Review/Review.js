import React, { useState } from 'react';
import ratingsData from "../../fakeData/fakeData" 
import Final from '../FinalReview/Final';
import './Review.css'

const Review = () => {
  const [products, SetProducts] = useState(ratingsData);

  console.log(products);
    return (
       <div className='productreview'>

        {
      

          products.map((product) => (
        <Final product={product} ></Final>
          ))
}
       </div>
    );
};

export default Review;