import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Progress from '@material-ui/core/CircularProgress';

const LoadingMessage = ({ loading, classes }) => {
  if (loading.isVisible) {
    return (
      <div className={classes.visible}>
        <Progress />
        <div className={classes.message}>{ loading.message }</div>
      </div>
    );
  } else {
    return null;
  }
}

const styles = {
  message: {
    color: '#ffffff',
    fontSize: '18px'
  },
  hidden: {
    display: 'none'
  },
  visible: {
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1'
  }
};

const mapStateToProps = ({ loading }) => ({
  loading
});

export default withStyles(styles)(
  connect(mapStateToProps, null)(LoadingMessage)
);
