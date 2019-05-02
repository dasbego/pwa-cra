import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigator from '../../components/Navigator';
import EventDescription from '../../components/EventDetail/EventDescription';
import EventLocation from '../../components/EventDetail/EventLocation';
import { base64ToSrc } from '../../libraries/utils';

class Event extends React.Component {
  render () {
    const cs = this.props.classes;

    const { id } = this.props.match.params;
    const { events } = this.props;
    const event = events.length ? events.find(event => event.eventBaseId === parseInt(id,10)) : {}
    if (event.eventBaseId) {
      return (
        <div>
          <Navigator />
          <div className={cs.root}>
            <img
              src={base64ToSrc(event.image)}
              alt={event.name}
              className={cs.imageBox}
            />
            <EventDescription eventDate={event.eventDate} description={event.description} />
            <EventLocation
              name={event.locationName}
              address={event.locationAddress}
              mapsUrl={event.locationUrl}
            />
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

const mapStateToProps = ({ events }) => ({
  events
});

export default withStyles(styles)(withRouter(
  connect(mapStateToProps, null)(Event)
));
