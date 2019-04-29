import React from 'react';
import Login from './pages/Login';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import InstaFeed from './pages/InstagramFeed';
import TwitterFeed from './pages/TwitterFeed';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

const isProd = process.env === 'production';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/event/:id" component={EventDetail} />
      <Route exact path="/instafeed" component={InstaFeed} />
      <Route exact path="/twitterfeed" component={TwitterFeed} />
      <Route component={() => <div>not found</div>} />
    </Switch>
  );
}

export default App;
