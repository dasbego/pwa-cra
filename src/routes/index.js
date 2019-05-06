import Login from '../pages/Home';
import Events from '../pages/Events';
import EventDetail from '../pages/EventDetail';
import News from '../pages/News';
import Toks from '../pages/Toks';

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
    path: '/news',
    component: News,
    exact: false
  },  {
    path: '/news/instagram',
    component: News,
    exact: true
  }, {
    path: '/news/twitter',
    component: News,
    exact: true
  }, {
    path: '/toks',
    component: Toks,
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