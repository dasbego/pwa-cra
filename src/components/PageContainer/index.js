import React from 'react';
import Grid from '@material-ui/core/Grid';

const PageContainer = ({ children }) => (
  <Grid container spacing={24} justify="center">
    <Grid item xl={8} md={8} xs={12}>
      {children}
    </Grid>
  </Grid>
);

export default PageContainer;
