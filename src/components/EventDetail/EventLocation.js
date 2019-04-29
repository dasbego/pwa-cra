import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { mdiGoogleMaps, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';

const EventDescription = (props) => {
  const cs = props.classes;
  const { location } = props;
  return (
    <Paper className={cs.container}>
      <div className={cs.location}>
        <Icon path={mdiMapMarker} size={3} color="#d63f36" />
        <div>
          <span><b>{location}</b></span>
          <br />
          <span>Dakota s/n, Nápoles, 03810<br />Ciudad de México, México</span>
        </div>
      </div>
      <Button className={cs.mapsLink}>
        <Icon path={mdiGoogleMaps} size={2} color="#09a35e" />
        <div className={cs.mapsLinkText}>Abrir en Maps</div>
      </Button>
    </Paper>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: '1rem'
  },
  location: {
    display: 'flex',
    alignItems: 'center',
    width: '70%'
  },
  mapsLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  mapsLinkText: {
    width: '100%'
  }
}

export default withStyles(styles)(EventDescription);
