import React from 'react';
import PageContainer from '../../components/PageContainer';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { getToks } from '../../libraries/api';

class Toks extends React.Component {
  state = {
    toks: []
  }

  componentDidMount() {
    const toks = getToks().body;
    this.setState({ toks });
  }

  render() {
    const cs = this.props.classes;
    return (
      <PageContainer className={cs.root}>
        <Grid container spacing={32}>
          {
            this.state.toks.map(tok => (
            <Grid item className={cs.tokContainer}>
              <img src={tok.image} alt="hola" className={cs.tokImage} />
              <div className={cs.tokName}>{tok.displayName}</div>
            </Grid>))
          }
        </Grid>
      </PageContainer>
    );
  }
}

const styles = theme => ({
  root: {
    padding: '1rem'
  },
  tokContainer: {
    width: theme.typography.pxToRem(200),
    height: theme.typography.pxToRem(200)
  },
  tokImage: {
    width: theme.typography.pxToRem(110),
    height: theme.typography.pxToRem(110)
  },
  tokName: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: theme.palette.common.blue,
    textDecoration: 'underline',
    marginTop: theme.typography.pxToRem(16)
  }
});

export default withStyles(styles)(Toks);
