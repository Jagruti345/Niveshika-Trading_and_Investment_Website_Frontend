import React from 'react'


function Universe() {
    return ( 
         <div className="container mt-5 mb-5">
        <div className="row text-center mb-5">
            <h1>The Niveshika Universe</h1>
            <p>Extend ypur trading and investment experience even further with our partner platforms</p>
            <div className="col-4 p-3">
                <img src="media/images/smallcaseLogo (1).png" style={{width:"150px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Thematic investment platform</p>
            </div>
             <div className="col-4 p-3 mt-5">
                <img src="media/images/streakLogo (1).png" style={{width:"150px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Algo and strategy platform</p>
            </div>
             <div className="col-4 p-3 mt-5">
                <img src="media/images/sensibullLogo (1).svg" style={{width:"150px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Options trading platform</p>
            </div>
            <div className="col-4 p-3 mt-5 mb-3">
                <img src="media/images/zerodhaFundhouse (1).png" style={{width:"180px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Asset management</p>
            </div>
             <div className="col-4 p-3 mt-5 mb-3">
                <img src="media/images/goldenpiLogo (1).png" style={{width:"150px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Bonds trading platform</p>
            </div>
             <div className="col-4 p-3 mt-5 mb-3">
                <img src="media/images/dittoLogo (1).png" style={{width:"130px",paddingBottom:"20px"}}/>
                <p className='text-muted text-small'>Insurance</p>
            </div>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup now</button>
        </div>
  </div>
     );
}

export default Universe;