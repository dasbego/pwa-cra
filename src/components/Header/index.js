import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  mdiMenu, mdiAccount
} from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Logo from '../../images/logo.svg';
import { base64ToSrc } from '../../libraries/utils';
import Drawer from '../Drawer';
import { setIsDrawerOpen } from '../../store/actions/drawer';

const styles = {
  root: {
    height: '7.0625rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '7.0625rem',
    background: '#ffffff',
  },
  headerLogo: {
    width: '100%',
  },
  headerButton: {
    width: '3.75rem',
    height: '3.75rem',
    borderRadius: '50%'
  }
}

class Header extends React.Component {
  render() {
    const cs = this.props.classes;
    return (
      <Grid container justify="center" className={cs.root}>
        <Grid item xl={8} md={8} xs={12} className={cs.container}>
          <Button className={cs.headerButton} onClick={() => this.props.setIsDrawerOpen('menu', true)}>
            <Icon path={mdiMenu} size={1} />
          </Button>
          <Link to="/">
            <img className={cs.headerLogo} src={Logo} alt="logo" />
          </Link>
          <Button className={cs.headerButton} onClick={() => this.props.setIsDrawerOpen('profile', true)}>
            {this.props.image ? (
                <Avatar src={base64ToSrc(this.props.image)} />
              ) : (
                <Icon path={mdiAccount} size={1} />)}
          </Button>
        </Grid>
        <Drawer />
      </Grid>
    );
  }
}

const mapStateToProps = ({ userProfile: { image }}) => ({
  image
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsDrawerOpen
}, dispatch);

export default withStyles(styles)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
);
