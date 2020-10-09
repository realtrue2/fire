import React from 'react'
import './style.scss'

import Fireman from "./Fireman"
import Partners from "./Partners"
import Donate from "./Donate";
import Slider from "./Slider"
import Info from "./Info"

function Body() {
    return (
        <>
            <Partners/>
            <Fireman/>
            <Donate/>
            <Slider/>
            <Info/>
        </>
    )

}

export default Body