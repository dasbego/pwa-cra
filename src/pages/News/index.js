
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { mdiInstagram, mdiTwitterBox } from '@mdi/js';
import Icon from '@mdi/react';
import clns from 'classnames';

import InstaFeed from '../InstagramFeed';
import TwitterFeed from '../TwitterFeed';

const styles = {
  container: {
    padding: '1rem'
  },
  socialContainer: {
    width: '100%',
    backgroundColor: '#c5c9d2',
    height: '60px',
    display: 'flex',
  },
  socialItem: {
    width: '50%',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center'
  },
  active: {
    backgroundColor: '#9a9da2'
  }
}

class News extends React.Component {
  render () {
    const cs = this.props.classes;
    const path = this.props.location.pathname;
    return (
      <>
        <div className={cs.socialContainer}>
          <Link
            to="/news/twitter"
            className={clns(cs.socialItem,
              path === '/news/twitter' && cs.active)}
          >
            <Button fullWidth style={{ height: '100%' }}>
              <Icon path={mdiTwitterBox} size={2} />
              Twitter
            </Button>
          </Link>
          <Link to="/news/instagram" className={clns(cs.socialItem,
            path === '/news/instagram' && cs.active)}
          >
            <Button fullWidth style={{ height: '100%' }}>
              <Icon path={mdiInstagram} size={2} />
              Instagram
            </Button>
          </Link>
        </div>
        <div className={cs.container}>
          <Route exact path="/news/instagram" component={InstaFeed} />
          <Route exact path="/news/twitter" component={TwitterFeed} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(News));
