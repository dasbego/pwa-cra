import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { mdiMenu, mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    height: '70px',
    backgroundColor: '#c5c9d2',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    backgroundColor: '#c5c9d2',
  },
  headerLogo: {
    width: '100px',
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
    <Grid container justify="center" className={cs.root}>
      <Grid item xl={8} md={8} xs={12} className={cs.container}>
        <Button className={cs.headerButton}>
          <Icon path={mdiMenu} size={1} />
        </Button>
        <Link to="/">
          <img className={cs.headerLogo} src={Logo} alt="logo" />
        </Link>
        <Button className={cs.headerButton}>
          <Icon path={mdiAccount} size={1} />
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Header);
