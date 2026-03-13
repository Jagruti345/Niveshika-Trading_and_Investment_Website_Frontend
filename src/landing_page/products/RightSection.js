import React from 'react'


function RightSection({imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
        <div className="row ">
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p className="text-muted mt-3 fs-4">{productDescription}</p>
                <a href={learnMore} className='fs-5' style={{textDecoration : "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
            </div>
            <div className="col-6">
                <img src={imageURL} alt='Right Image'/>
            </div>
        </div>
  </div>
     );
}

export default RightSection;