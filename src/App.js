import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

//Personal components 
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Callum White',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'About Me'
      },
      portfolio: {
        title: 'Portfolio'
      },
      contact: {
        title: 'Contact'
      }
    }
  }
  render (){
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar bg="transparant" expand="lg"> 
            <Navbar.Brand className="text-light"> Callum White </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-light" to="/">About</Link>
                <Link className="nav-link text-light" to="/portfolio">Portfolio</Link>
                <Link className="nav-link text-light" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>       
          <Footer />
        </Container>
      </Router>
    );
  }
}
//Collapse box needs to be white also
export default App;
