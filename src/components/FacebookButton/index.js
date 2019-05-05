import React, { Component } from 'react';
import FbLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { mdiFacebookBox } from '@mdi/js';
import Icon from '@mdi/react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { loginUserWithFb } from '../../libraries/api';
import { withSnackbar } from 'notistack';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserProfile } from '../../store/actions/userProfile';
import { setLoadingMessage, hideLoading } from '../../store/actions/loading';

class FacebookButton extends Component {
  state = {
    isLoggedIn: false,
  }

  responseFacebook = ({ accessToken }) => {
    loginUserWithFb(accessToken)
      .then(({ status, data }) => {
        this.props.hideLoading()
        if (status === 200) {
          this.props.updateUserProfile(data.body);
          this.props.enqueueSnackbar(data.message, {
            variant: 'info',
            autoHideDuration: 5000
          });
          if (data.body.token) {
            this.saveToken(data.body.token)
            this.props.history.push('/events');
          } else {
            this.props.history.push('/register');
          }
        }
      })
      .catch((err) => {
        this.props.hideLoading()
        this.props.enqueueSnackbar(err.message, {
          variant: 'error',
          autoHideDuration: 5000
        });
      })
  }

  saveToken = (token) => {
    sessionStorage.setItem('sess_tk', token);
  }

  buttonClicked = () => {
    this.props.setLoadingMessage('Verificando cuenta');
  }

  render() {
    let fbContent;
    const { classes } = this.props;

    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (<FbLogin
        appId="528198861042637"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        onClick={this.buttonClicked}
        callback={this.responseFacebook}
        textButton="Login con Facebook"
        cssClass={classes.fbButton}
        disableMobileRedirect={true}
        render={renderProps => (
          <Button
            className={classes.fbButton}
            onClick={renderProps.onClick}
            fullWidth
          >
            <Icon path={mdiFacebookBox} size={1} />
            Login con Facebook
          </Button>
        )}
      />
      )
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}

const styles = {
  fbButton: {
    width: '100%'
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateUserProfile,
  setLoadingMessage,
  hideLoading
}, dispatch);

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(
    withRouter(
      withSnackbar(
        FacebookButton
      )
    )
  )
);
