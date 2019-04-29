import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { mdiMenu, mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

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
    <div className={cs.container}>
      <Button className={cs.headerButton}>
        <Icon path={mdiMenu} size={1} />
      </Button>
      <Link to="/">
        <img className={cs.headerLogo} src={Logo} alt="logo" />
      </Link>
      <Button className={cs.headerButton}>
        <Icon path={mdiAccount} size={1} />
      </Button>
    </div>
  );
}

export default withStyles(styles)(Header);
