import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoadingMessage, hideLoading } from '../../store/actions/loading';

import { logout } from '../../libraries/api';
import { setIsDrawerOpen } from '../../store/actions/drawer';
import { routerPaths } from '../../routes';

class MyDrawer extends React.Component {
  state = {
    drawerOptions: []
  }

  logout = () => {
    this.props.setIsDrawerOpen('', false);
    this.props.setLoadingMessage('Cerrando sesión...')
    logout()
      .then(() => {
        this.props.hideLoading();
        sessionStorage.removeItem('sess_tk');
        this.props.history.push('/');
      })
  }

  isSelected = (selectionPath) => {
    return this.props.location.pathname === selectionPath;
  }

  setDrawerOptions = (option) => {
    const drawerOptions = this.getOptions(option);
    this.setState({ drawerOptions });
  }

  componentDidUpdate(prevProps) {
    if (this.props.drawer.isOpen
      && (this.props.drawer.isOpen !== prevProps.drawer.isOpen)) {
      this.setDrawerOptions(this.props.drawer.selected);
    }
  }

  navigateToPath = (path) => {
    this.props.setIsDrawerOpen('', false);
    this.props.history.push(path)
  }

  getOptions = (option) => {
    switch (option) {
      case 'menu': {
        return [{
          name: 'Eventos',
          path: routerPaths.events,
          onClick: () => this.navigateToPath(routerPaths.events)
        }, {
          name: 'Noticias',
          path: routerPaths.news,
          onClick: () => this.navigateToPath(routerPaths.news)
        }]
      }
      case 'profile': {
        return [{
          name: 'Salir',
          onClick: () => this.logout()
        }];
      }
      default:
        return [];
    }
  };

  render () {
    const { classes, drawer } = this.props;
    const { drawerOptions } = this.state;
    return (<Drawer
      open={drawer.isOpen}
      onClose={() => this.props.setIsDrawerOpen(false)}
      anchor="right"
    >
      <div
        tabIndex={0}
        role="button"
        className={classes.drawerList}
      >
        <List component="nav">
          <ListSubheader>Menu</ListSubheader>
          {
            drawerOptions.map(option => (
              <ListItem
                className={classes.drawerItem}
                classes={{ selected: classes.drawerItemSelected }}
                button
                key={option.name}
                onClick={option.onClick}
                selected={this.isSelected(option.path)}
              >
                <ListItemText className={classes.drawerText} primary={option.name} />
              </ListItem>
            ))
          }
        </List>
      </div>
    </Drawer>)
  }
}

const styles = {
  drawerItem: {
    maxHeight: '4.375rem',
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      '& span': {
        color: '#00bff4'
      }
    },
  },
  drawerText: {
    textTransform: 'uppercase',
    '& span': {
      fontWeight: '700',
      '&:hover': {
        color: '#00bff4'
      }
    }
  },
  drawerList: {
    width: '12rem'
  },
  drawerItemSelected: {
    backgroundColor: 'transparent !important',
    '& div span': {
      color: '#00bff4 !important'
    }
  }
}

const mapStateToProps = ({ drawer }) => ({
  drawer
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsDrawerOpen,
  setLoadingMessage,
  hideLoading
}, dispatch);

export default withStyles(styles)(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(MyDrawer)
  )
);
