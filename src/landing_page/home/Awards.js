import React from 'react'

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker (1).svg' alt='Awards Image' className='mb-5' style={{ width: "500px" }} />
                </div>  
                <div className='col-6 p-5 mt-4'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5 fs-5'>2+ million Niveshika clients contribute to over 15% of all retail order volumes in India daily by trading and Investing in:</p>
                    <div className='row fs-5'>
                        <div className='col-6 '>
                        <ul>
                            <li>
                                <p>Future and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                        </div>
                         <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos (1).png' alt="Awards Image" style={{ width: "90%" }}/>
                </div>  
            </div> 
        </div>
     );
}

export default Awards;
