import react from 'react';
import { useSpring, animated } from 'react-spring';

function Cardinfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="my-card-info" style={style}>
            <p className="my-card-title text-light">{props.title}</p>
            <p className="my-card-subtitle text-light">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >View Project</a>
        </animated.div>
    )
}

export default Cardinfo