import React from 'react'
import './style.scss'

function Partners() {
    return (
        <section className="partner">
            <div className="wrap">
                <h2>
                    All donations go directly to the Australian Wildfire Fund*
                </h2>
                <fieldset className="fonds">
                    <legend className="text">
                        The Australian Wildfire Fund
                    </legend>
                    <ul>
                        <li>
                            <a href="/" className="alliance">

                            </a>
                            <p>Earth Alliance</p>
                        </li>
                        <li>
                            <a  href="/" className="global">

                            </a>
                            <p>Global Wildlife Conservation</p>
                        </li>
                    </ul>
                </fieldset>
                <fieldset className="partners">
                    <legend className="text">
                        Partners:
                    </legend>
                    <ul>

                        <li>
                            <a href="/">
                                <div className="img oxygen">

                                </div>
                                <p className="name">
                                    Oxygen Seven
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="img bush">

                                </div>
                                <p className="name">
                                    Bush Heritage
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="img wires">

                                </div>
                                <p className="name">
                                    WIRES
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="img aussie">

                                </div>
                                <p className="name">
                                    Aussie Ark
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div className="img emerson">

                                </div>
                                <p className="name">
                                    Emerson Collective
                                </p>
                            </a>
                        </li>

                    </ul>
                </fieldset>

                <p>
                    Donations to the Australia Wildfire Fund are managed by Global Wildlife Conservation
                </p>
                <p className="grey">
                    *Consult your accountant for information on tax deductions
                </p>
            </div>
        </section>
    )
}

export default Partners