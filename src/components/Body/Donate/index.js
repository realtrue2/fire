import React from 'react'
import './style.scss'

import DonateList from '../../DoanteList'
import items from '../../../DonateList'

function Donate() {
    return (
        <section className="donate" id="donate">
            <div className="wrap">
                <DonateList items={items}/>
                <div className="where">
                    <div className="title">
                        100% of donations go directly to:
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                Assist local firefighting efforts.
                            </li>
                            <li>
                                Support affected local communities.
                            </li>
                        </ul>
                    </div>
                    <div className="list">
                        <ul>
                            <li>
                                Implement solutions to restore
                                and repopulate unique ecosystems.
                            </li>
                            <li>
                                Rescue and recover wildlife.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Donate