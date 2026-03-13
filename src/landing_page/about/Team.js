import React from 'react'


function Team() {
    return ( 
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5 ">
         People
        </h1>
      </div>
      <div className="row text-muted" style={{lineHeight:'2.2rem'}}>
        <div className="col-6 p-3 fs-5 text-center">
            <img src="media/images/Jagruti.jpeg" style={{"width":"18rem",Width:"70%", borderRadius:"100%"}}/>
            <h4 className='mt-5'>Jagruti Patil</h4>
            <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-3 fs-5">
           <p>
            Jagruti bootstrapped and founder Niveshika in 2025 to overcome the hurdles she faced during decade long stint as a trader. Today, Niveshika has changed the landscape of the Indian broking industry.</p>
            <p> She is a visionary leader with a passion for innovation and a commitment to providing the best possible experience for her customers.</p>
            <p>Under her leadership, Niveshika has become one of the most trusted and respected names in the Indian broking industry.
           </p>
           <p>Connect on <a href="" style={{textDecoration:"none"}}>HomePage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none" }}>Twitter</a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;