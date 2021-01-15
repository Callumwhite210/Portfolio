import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Hero from '../components/Hero/Hero';

function Portfolio(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Carousel />

        </div>   
    )
}

export default Portfolio;