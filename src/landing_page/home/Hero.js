import React from 'react'

function Hero() {
    return ( 
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
                    <img src='media/images/homeHero (1).png' alt='Hero' className='mb-5' style={{ width: "100%" }} />
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p className='fs-5'>Online platform to invest in stocks, mutual funds and more</p>
                    <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup now</button>
            </div>

       </div>
     );
}

export default Hero;