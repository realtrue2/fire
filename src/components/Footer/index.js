import React from 'react'
import './style.scss'

function Footer() {
    return(
        <footer>
            <div className="wrap">
                    <div className="title">
                        Crypto is the future.
                        <br/>
                        <span>
                        Let's contribute to a better future for Australia.
                        </span>
                    </div>
                    <div className="tag">
                    </div>
                    <div className="social-links">
                        <a href="/" className="link twitter">
                            <p className="twitter">Twitter</p>
                        </a>
                        <a href="/" className="link whatsapp">
                            <p className="whatsapp">Whatsapp</p>
                        </a>
                        <a href="/" className="link telegram">
                            <p className="telegram">Telegram</p>
                        </a>
                        <a href="/" className="link facebook">
                            <p className="facebook">Facebook</p>
                        </a>
                    </div>
                <div className="firefighter"></div>
            </div>
        </footer>
    )
}

export default Footer