import React, { Component } from 'react';
import FbLogin from 'react-facebook-login';

export default class FacebookButton extends Component {
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
      />)
    }
    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
