import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { mdiKeyboardBackspace, mdiShareVariant } from '@mdi/js';
import Icon from '@mdi/react';
import { withRouter } from 'react-router-dom';

const Navigator = ({ classes, history }) => (
  <div className={classes.container}>
    <div className={classes.button}>
      <Button
        onClick={() => history.push('/events')}
        title="back"
        fullWidth>
        <Icon path={mdiKeyboardBackspace} size={2} color="gray" />
      </Button>
    </div>
    <div className={classes.button}>
      <Button title="share" fullWidth>
        <Icon path={mdiShareVariant} size={2} color="gray" />
      </Button>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    backgroundColor: '#c5c9d2',
    left: 0,
    right: 0,
    top: 0,
    padding: '0 1rem'
  },
  button: {
    width: '50%',
  }
}

export default withStyles(styles)(withRouter(Navigator));
