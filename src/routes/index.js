import Login from '../pages/Login';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';
import InstaFeed from '../pages/InstagramFeed';
import TwitterFeed from '../pages/TwitterFeed';

export default [{
    path: '/login',
    component: Login,
    exact: true
  }, {
    path: '/signup',
    component: Login,
    exact: true
  }, {
    path: '/events',
    component: Events,
    exact: true
  }, {
    path: '/event/:id',
    component: EventDetail,
    exact: true
  }, {
    path: '/instafeed',
    component: InstaFeed,
    exact: true
  }, {
    path: '/twitterfeed',
    component: TwitterFeed,
    exact: true
  }
];
