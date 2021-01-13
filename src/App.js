import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';


function App() {
  return (

  <div className="App">
    
      <header className="App-header"> 
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-light">Callum White</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li><a className="nav-link active text-light">About <span className="sr-only">(current)</span></a></li>
            <li><a className="nav-link text-light" href="portfolio.html">Portfolio</a></li>
            <li><a className="nav-link text-light" href="contact.html">Contacts</a></li>
          </div>
        </div>
      </nav>
    </header>
    
    <footer className="footer">
      <div className="text-white text-center">
        <div className="container">
        <span className="text-muted">Copywrite</span>
        <span>
          <a href="https://github.com/Callumwhite210" target="_blank"><i className="fab fa-linkedin fa-2x iconfooter"></i></a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/callum-white-2378631b1/" target="_blank"><i className="fab fa-github fa-2x iconfooter"></i></a>
        </span>
        </div>
      </div>
    </footer>

  </div>
  );
}

export default App;
