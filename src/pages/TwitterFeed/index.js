import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const styles = {
  container: {
    padding: '1rem'
  }
}

const InstagramFeed = (props) => (
  <>
    <Header />
    <div className={props.classes.container}>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="sneakerfevermx"
      options={{height: '100vh'}}
    />
    </div>
  </>
);

export default withStyles(styles)(InstagramFeed);
