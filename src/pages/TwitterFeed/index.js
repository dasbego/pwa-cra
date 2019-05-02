import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const styles = {
  container: {
    padding: '1rem'
  }
}

const TwitterFeed = (props) => (
  <div className={props.classes.container}>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="sneakerfevermx"
      options={{height: '100vh'}}
    />
  </div>
);

export default withStyles(styles)(TwitterFeed);
