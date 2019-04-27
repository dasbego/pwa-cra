import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Router from 'next/router';

import Header from '../../components/Header';

const Event = (props) => {
  const cs = props.classes;
  const { router: { query } } = Router;
  return (
    <div>
      <Header />
      <div className={cs.root}>
        event {query.id}
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    padding: '1rem',
  }
}

export default withStyles(styles)(Event);
