import React from 'react';
import Login from './pages/Login';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import InstaFeed from './pages/InstagramFeed';
import TwitterFeed from './pages/TwitterFeed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

const isProd = process.env === 'production';

function App() {
  return (
    <Router basename="/sand" >
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/events" component={Events} />
      <Route path="/event/:id" component={EventDetail} />
      <Route path="/instafeed" component={InstaFeed} />
      <Route path="/twitterfeed" component={TwitterFeed} />
    </Router>
  );
}

export default App;
