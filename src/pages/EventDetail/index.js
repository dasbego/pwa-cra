import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import _has from 'lodash.has';

import { getEventById } from '../../libraries/api';
import Navigator from '../../components/Navigator';
import EventDescription from '../../components/EventDetail/EventDescription';
import EventLocation from '../../components/EventDetail/EventLocation';

class Event extends React.Component {
  state = {
    event: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getEventById(id)
    .then((res) => {
      this.setState({ event: res })
    });
  }

  render () {
    const cs = this.props.classes;
    const { event }  = this.state;
    if (_has(event, 'id')) {
      return (
        <div>
          <Navigator />
          <div className={cs.root}>
            <img
              src={event.image}
              alt={event.name}
              className={cs.imageBox}
            />
            <EventDescription date={event.date} description={event.description} />
            <EventLocation location={event.location} />
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 'calc(1rem + 18.75rem) 1rem 1rem',
    position: 'relative',
    marginTop: '0.5rem',
  },
  imageBox: {
    width: '100%',
    height: '18.75rem',
    backgroundColor: 'gray',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
  }
}

export default withStyles(styles)(withRouter(Event));
