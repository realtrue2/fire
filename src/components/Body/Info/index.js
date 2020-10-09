import React from 'react'
import './style.scss'

export default function Info() {
    return (
        <section className="info">
            <div className="wrap">
                <div className="info-cont">
                    <div className="stat">
                        <div className="row">
                            <div className="img-col">
                                <div className="img" style={{ backgroundImage:`url("/assets/img/people.svg")` }}>

                                </div>
                            </div>
                            <div className="digit">
                                27
                            </div>
                            <div className="name">
                                Fatalities
                            </div>
                        </div>
                        <div className="row">
                            <div className="img-col">
                                <div className="img" style={{ backgroundImage:`url("/assets/img/home.svg")` }} >

                                </div>
                            </div>
                            <div className="digit">
                                2000+
                            </div>
                            <div className="name">
                                Homes Destroyed
                            </div>
                        </div>
                        <div className="row">
                            <div className="img-col">
                                <div className="img" style={{ backgroundImage:`url("/assets/img/acres.svg")` }}>

                                </div>
                            </div>
                            <div className="digit">
                                20M
                            </div>
                            <div className="name">
                                Acres Burned
                            </div>
                        </div>
                        <div className="row">
                            <div className="img-col">
                                <div className="img" style={{ backgroundImage:`url("/assets/img/heaven.svg")` }} >

                                </div>
                            </div>
                            <div className="digit">
                                350M
                            </div>
                            <div className="name">
                                Tonners of CO released
                            </div>
                        </div>
                        <div className="row">
                            <div className="img-col">
                                <div className="img" style={{ backgroundImage:`url("/assets/img/animal.svg")` }}>

                                </div>
                            </div>
                            <div className="digit">
                                1 Billion+
                            </div>
                            <div className="name">
                                Animals killed
                            </div>
                        </div>
                    </div>
                    <div className="grafic">
                        <div className="title">
                            Acres burned in recent wildfire events
                        </div>
                        <div className="col">
                            <div className="img-body">
                                <div className="img" style={{ height: 23.21}}>
                                    <div className="digits">
                                        2.0M
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                2018 {'\n'} California Fires
                            </div>
                        </div>
                        <div className="col">
                            <div className="img-body">
                                <div className="img" style={{ height: 31.17}}>
                                    <div className="digits">
                                        2.0M
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                2018 {'\n'} California Fires
                            </div>
                        </div>
                        <div className="col">
                            <div className="img-body">
                                <div className="img" style={{ height: 93.5}}>
                                    <div className="digits">
                                        2.0M
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                2018 {'\n'} California Fires
                            </div>
                        </div>
                        <div className="col">
                            <div className="img-body">
                                <div className="img" style={{ height: 280}}>
                                    <div className="digits">
                                        2.0M
                                    </div>
                                </div>
                            </div>
                            <div className="text">
                                2018 {'\n'} California Fires
                            </div>
                        </div>

                    </div>
                </div>
                <div className="link">
                    <p>
                        according to information <a href="/">australiawildfirefund.org</a>
                    </p>
                </div>
            </div>
        </section>
    )
}