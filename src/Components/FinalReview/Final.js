import React from 'react';

const Final = (props) => {



    const { id, description, name, ratings } = props.product;


    return (
         <div >
<div class="card " >
  
  <div class="card-body">
                    <h5 class="card-title">Name:{ name}</h5>
                    <p class="card-text">Id:{id}</p>
                    <p>Description:{description}</p>
                    <p>Ratings:{ ratings}</p>
  
  </div>
</div>
        </div>
    );
};

export default Final;