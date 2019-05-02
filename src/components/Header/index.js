import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  mdiMenu, mdiAccount, mdiCalendarStar,
  mdiNewspaper, mdiPower
} from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@material-ui/core/Button';
import Logo from '../../images/logo.svg';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { routerPaths } from '../../routes';

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
  },
  drawerItem: {
    maxHeight: '70px'
  }
}

class Header extends React.Component {
  state = {
    isDrawerOpen: false,
    drawerOptions: []
  }

  openDrawer = () => {
    this.setState({
      isDrawerOpen: true,
    });
  };

  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false
    })
  }

  setDrawerOptions = (option) => {
    let drawerOptions;
    if (option === 'menu') {
      drawerOptions = [{
        name: 'Eventos',
        onClick: () => this.props.history.push(routerPaths.events),
        icon: mdiCalendarStar
      }, {
        name: 'Noticias',
        onClick: () => this.props.history.push(routerPaths.news),
        icon: mdiNewspaper
      }];
    } else {
      drawerOptions = [{
        name: 'Logout',
        onClick: () => {

        },
        icon: mdiPower
      }];
    }
    this.setState({ drawerOptions });
    this.openDrawer();
  }

  render() {
    const cs = this.props.classes;
    const { isDrawerOpen } = this.state;
    return (
      <Grid container justify="center" className={cs.root}>
        <Grid item xl={8} md={8} xs={12} className={cs.container}>
          <Button className={cs.headerButton} onClick={() => this.setDrawerOptions('menu')}>
            <Icon path={mdiMenu} size={1} />
          </Button>
          <Link to="/">
            <img className={cs.headerLogo} src={Logo} alt="logo" />
          </Link>
          <Button className={cs.headerButton} onClick={() => this.setDrawerOptions('profile')}>
            <Icon path={mdiAccount} size={1} />
          </Button>
        </Grid>
        {
          isDrawerOpen && (<Drawer
            open={isDrawerOpen}
            onClose={this.closeDrawer}
            anchor="bottom" 
          >
            <List>
              <ListSubheader>Menu</ListSubheader>
              {
                this.state.drawerOptions.map(option => (
                  <ListItem className={cs.drawerItem} button key={option.name} onClick={option.onClick}>
                    {option.icon && (<ListItemIcon><Icon path={option.icon} size={1}/></ListItemIcon>)}
                    <ListItemText primary={option.name} />
                  </ListItem>
                ))
              }
            </List>
          </Drawer>)
        }
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Header));
