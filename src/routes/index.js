import Login from '../pages/Home';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';
import InstaFeed from '../pages/InstagramFeed';
import TwitterFeed from '../pages/TwitterFeed';

const routes = [{
    path: '/login',
    component: Login,
    exact: true
  }, {
    path: '/signup',
    component: Login,
    exact: true
  }, {
    path: '/register',
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

// Usage: routerPaths.login === '/login'
export const routerPaths = routes
.map(route => ({
  [route.path.split('/')[1]]: route.path
}))
.reduce((prev, curr) => {
  return { ...prev, ...curr }
}, {});

export default routes;