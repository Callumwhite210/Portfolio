import React from "react";
import { Form, Button } from "react-bootstrap";
import Content from "../components/Content/Content";
import Hero from '../components/Hero/Hero';
import Axios from 'axios';
class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailsent: null
        }
    }
    render(){
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">
                                Full Name
                            </Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>                        
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">
                                Email
                            </Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>                        
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">
                                Message
                            </Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange}/>                        
                        </Form.Group>
                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }
}

export default Contact;