import React, { Component } from 'react';
import FbLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { mdiFacebookBox } from '@mdi/js';
import Icon from '@mdi/react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class FacebookButton extends Component {
  state = {
    isLoggedIn: false,
    id: '',
    name: '',
    email: '',
    picture: '',
  }

  componentClicked = () => {
    console.log('clicked');
  }

  responseFacebook = (response) => {
    console.log(response);
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
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        textButton="Login con Facebook"
        cssClass={classes.fbButton}
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
    // display: 'flex',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // color: 'black',
    // fontWeight: '400',
    // fontSize: '0.875rem',
    // border: 'none'
  }
}

export default withStyles(styles)(FacebookButton);
