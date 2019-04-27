import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { mdiMenu, mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '70px',
    backgroundColor: '#c5c9d2',
    left: 0,
    right: 0,
    top: 0,
    padding: '0 1rem'
  },
  headerLogo: {
    width: '170px',
    height: '76.5px'
  },
  headerButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%'
  }
}

const Header = ({ classes }) => {
  const cs = classes;
  return (
    <div className={cs.container}>
      <Button className={cs.headerButton}>
        <Icon path={mdiMenu} size={1} />
      </Button>
      <img className={cs.headerLogo} src="/static/logo.svg" />
      <Button className={cs.headerButton}>
        <Icon path={mdiAccount} size={1} />
      </Button>
    </div>
  );
}

export default withStyles(styles)(Header);
