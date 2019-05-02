import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    padding: '1rem'
  }
}

const InstagramFeed = (props) => (
  <div className={props.classes.container}>
    <InstagramEmbed
      url='https://www.instagram.com/p/Bw0CSXOH6RI/'
      hideCaption={false}
      containerTagName='div'
      protocol=''
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  </div>
);

export default withStyles(styles)(InstagramFeed);
