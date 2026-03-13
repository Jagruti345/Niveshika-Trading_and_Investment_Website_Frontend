import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row ">
            <div className="col-6 ">
                <img src={imageURL} alt="Left Image" />
            </div>
            <div className="col-6 mt-5">
                <h1>{productName}</h1>
                <p className="text-muted mt-3 fs-4">{productDescription}</p>
                <div className='fs-5'>
                  <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                <a href={learnMore} style={{marginLeft : "50px",textDecoration : "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                </div>
                <div className="mt-4 fs-5">
                  <a href={googlePlay} ><img src="media/images/googlePlayBadge (1).svg"/></a>
                <a href={appStore} style={{marginLeft : "50px"}}><img src="media/images/appStoreBadge (1).svg"/></a>
                </div>
            </div>
        </div>
  </div>
  )
}

export default LeftSection;
