import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import PortfolioPage from './components/PortfolioPage';
import ContactUsPage from './components/ContactUsPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <Switch>
        <p>eeagvfag</p>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/chatbot" component={Chatbot}/>
      </Switch>
    </Router>
  );
}

export default App;
