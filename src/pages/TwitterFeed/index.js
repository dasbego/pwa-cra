import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import PageContainer from '../../components/PageContainer';

const styles = {
  container: {
    padding: '1rem'
  }
}

const TwitterFeed = (props) => (
  <PageContainer>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="sneakerfevermx"
      options={{height: '100vh'}}
    />
  </PageContainer>
);

export default withStyles(styles)(TwitterFeed);
