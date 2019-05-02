import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { mdiGoogleMaps, mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import { withRouter, Link } from 'react-router-dom';

const EventDescription = (props) => {
  const openMaps = (url) => {
    window.location = url;
  };
  const cs = props.classes;
  const { name, address, mapsUrl } = props;
  return (
    <Paper className={cs.container}>
      <div className={cs.location}>
        <Icon path={mdiMapMarker} size={3} color="#d63f36" />
        <div>
          <span><b>{name}</b></span>
          <br />
          <span>{address}</span>
        </div>
      </div>
      <a href={mapsUrl} rel="noopener noreferrer" target="_blank">
        <Button className={cs.mapsLink} >
          <Icon path={mdiGoogleMaps} size={2} color="#09a35e" />
          <div className={cs.mapsLinkText}>Abrir en Maps</div>
        </Button>
      </a>
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

export default withStyles(styles)(withRouter(EventDescription));
