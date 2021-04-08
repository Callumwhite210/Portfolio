import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Hero from '../components/Hero/Hero';
import { Button } from "react-bootstrap";
import CV from '../utils/Callum White Resume.pdf';
function Portfolio(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Carousel />

        <div className="text-center py-5">
            <Button><a href={CV} download className="text-white" >Download Resume</a></Button>
        </div>

        </div>   
    )
}

export default Portfolio;