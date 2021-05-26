import React from "react";
import Content from "../components/Content/Content";
import Hero from '../components/Hero/Hero';
import ContactUs from '../components/contactForm'
class Contact extends React.Component {


    render(){
        return(
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <ContactUs/>
                </Content>
            </div>
        );
    }
}

export default Contact;