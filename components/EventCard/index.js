import React from 'react';
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link'

const Event = (props) => {
  const { data, classes } = props;

  return (
    <Paper className={classes.container}>
      <Link as={`/event/${data.id}`} href={`/eventDetail?id=${data.id}`}>
        <div className={classes.fullWidth}>
          <div className={classes.imgContainer}>
            <img className={classes.img} src={data.image} />
          </div>
          <div className={classes.description}>
            <div className={classes.info1}>
              <span><b>{data.name}</b></span>
              <span>
                <Icon path={mdiMapMarker} size={0.5} color="gray" />
                {data.location}
              </span>
            </div>
            <div className={classes.info2}>
              <span>{data.date}</span>
              <span className={classes.price}>
                <b>${data.price}</b>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Paper>
  );
}

const styles ={
  container: {
    display: 'flex',
    marginBottom: '1rem',
    border: '2px solid #c5c9d2',
    cursor: 'pointer',
    height: '7.5rem'
  },
  imgContainer: {
    display: 'flex',
    width: '35%'
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray'
  },
  description: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between'
  },
  info1: {
    display: 'flex',
    alignItems: 'space-even',
    flexDirection: 'column'
  },
  info2: {
    display: 'inherit',
    justifyContent: 'space-between'
  },
  price: {
    color: '#d69659'
  },
  fullWidth: {
    width: '100%',
    display: 'flex'
  }
}

export default withStyles(styles)(Event);
