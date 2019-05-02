import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { mdiCalendarStar } from '@mdi/js';
import Icon from '@mdi/react';
import Divider from '@material-ui/core/Divider';

const EventDescription = (props) => {
  const cs = props.classes;
  const { description, eventDate } = props;
  return (
    <Paper className={cs.container}>
      <div className={cs.date}>
        <Icon path={mdiCalendarStar} size={2} />
        {eventDate}
      </div>
      <Divider></Divider>
      <div className={cs.content}>
        {description}
      </div>
    </Paper>
  );
}

const styles = {
  container: {
    minHeight: '150px',
    padding: '1rem',
    marginBottom: '2rem'
  },
  date: {
    display: 'flex',
    fontWeight: '700',
    alignItems: 'center'
  },
  content: {
    paddingTop: '1rem',
    textAlign: 'center'
  }
}

export default withStyles(styles)(EventDescription);
