import React, {PureComponent} from 'react'
import './style.scss'

class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            click:false
        };

        this.copy = this.copy.bind(this);
    }

    copy = (e) => {
        e.preventDefault();
        this.setState({
            click: !this.state.click
        })
    }

    render() {
        return (
            <header>
                <div className="wrap">
                    <div className="header-line">
                        <h1 className="title">
                            Collecting donations
                        </h1>
                        <p className="subtitle">
                            To help fund the recovery {"\n"}
                            from wildfires in Australia
                        </p>
                        <ul className="social">
                            <li>
                                <a className="link-telegram" href="https://vk.com">
                                </a>
                            </li>
                            <li>
                                <a className="link-whatsapp" href="https://vk.com">
                                </a>
                            </li>
                            <li>
                                <a className="link-twitter" href="https://vk.com">
                                </a>
                            </li>
                            <li>
                                <a className="link-facebook" href="https://vk.com">
                                </a>
                            </li>
                            <li>
                                <a onClick={this.copy} className={this.state.click ? 'link-copy click' : 'link-copy'} href="#">
                                </a>
                            </li>
                        </ul>
                        <div className="btn-donate">
                            <a href="#donate">
                                Donate
                            </a>
                        </div>

                    </div>

                </div>
            </header>
        )
    }

}

export default Header