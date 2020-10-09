import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.scss'

export default function Slider() {
    return (
        <section className="slider">
            <div className="wrap">
                <h2>The Damage So Far:</h2>
                <div className="carousel-wrapper">
                    <Carousel thumbWidth={153} showIndicators={false} showStatus={false} interval={5000} infiniteLoop useKeyboardArrows autoPlay>
                        <div>
                            <img src="/assets/img/wildfireimg2.png" />
                        </div>
                        <div>
                            <img src="/assets/img/wildfireimg.jpg" />
                        </div>
                        <div>
                            <img src="/assets/img/wildfireimg2.png" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}