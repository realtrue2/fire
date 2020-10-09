import React from 'react'
import './style.scss'

function Fireman() {
    return (
        <section>
            <div className="wrap">
                <div  className="fireman">
                    <div className="info">
                        <div className="text">
                            <p>
                                We believe that the <span className="bold">crypto community</span> can help people and animals affected by wildfire.
                            </p>
                            <p className="icon">
                                <span className="bold">All donations are going to Oxygen <br/>
                                    Seven</span> for Wildfires Campaign
                            </p>
                            <div className="links">
                                <a href="/" className="green-btn">
                                    Donate publicly
                                </a>
                                <a href="/" className="green-btn">
                                    Donate anonymously
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="img">

                    </div>
                </div>
                <div className="bg-table">
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </section>
    )
}

export default Fireman