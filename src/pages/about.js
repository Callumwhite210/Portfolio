import React from "react";
import Content from "../components/Content/Content";
import Hero from '../components/Hero/Hero';
import Me from '../images/Me.jpg';

function About(props) {

    return(
       <div>
           <Hero title={props.title} />

           <Content>
        <img className="avatar" src = {Me} alt = "Avatar"/>
           <p>Hi! My name is Callum White and I am an aspiring web developer currently enrolled in university of Adelaide's amazing coding bootcamp.</p>
           <p>I have found when creating this series of webpages that this was a pretty big stepping stone in the write direction and I can’t wait to see </p> 
           <p>what the future holds for my education.</p> 
           <h5>Email: callumwhite210@gmail.com </h5>
           </Content>
       </div>
    );
}

export default About;