import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h5 className="fs-2 text-center">
          Support Portal
        </h5>
        <a href="/" style={{fontSize:"20px"}}>Track Tickets</a>
      </div>
      <div className="row p-5 mx-5" >
        <div className="col-6 p-5">
            <h3 className="fs-3 mx-5">Search for an answer or browse help topic to create a ticket</h3>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected.." className="mx-5"/><br />
            <div className="mx-5">
            <a href="/" className="mx-2">Track account opening</a>
            <a href="/" className="mx-2">Track segment activation</a>
            <a href="/" className="mx-2">Intraday margins</a>
            <a href="/" className="mx-2">Kite user manual</a>
            </div>
        </div>
        <div className="col-6 p-5">
            <h3 className="fs-3">Featured</h3>
            <ol>
                <li><a href="/">Current Takeovers and Delisting - January 2024</a></li>
                <li><a href="/">Latest Intraday leverages - MIS & CO</a></li>
            </ol>
            
            
        </div>
      
      </div>
  
    </section>
  );
}

export default Hero;
