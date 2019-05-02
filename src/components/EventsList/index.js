import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Event from '../EventCard';
import Progress from '@material-ui/core/CircularProgress';

const styles = {
  progress: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '70px'
  }
}

const EventList = ({ title, events, isLoading, classes }) => {
  return (
    <div>
      <h3><b>{title}</b></h3>
      {
        events.length ? events.map(event => (
          <Event key={event.eventBaseId} data={event} />
        )) : (
          <div className={classes.progress}>
          { isLoading ?  <Progress /> : <div>No hay eventos</div> }
          </div>
        )
      }
    </div>
  );
}

export default withStyles(styles)(EventList);
