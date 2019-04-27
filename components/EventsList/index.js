import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Event from '../EventCard';

const styles = {
}

const EventList = (props) => {
  const cs = props.classes;
  return (
    <div>
      <h3><b>{props.title}</b></h3>
      {
        props.events && props.events.map(event => (
          <Event key={event.id} data={event} />
        ))
      }
    </div>
  );
}

export default withStyles(styles)(EventList);
