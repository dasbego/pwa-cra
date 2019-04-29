import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import EventsList from '../../components/EventsList';
// events mock
import MockEvents from '../../mocks/events';

const styles = {
  eventsContainer: {
    padding: '1rem'
  }
}

const Events = (props) => {
  const cs = props.classes;

  const upcomingEvents = MockEvents.filter(event => !event.expired)

  const pastEvents = MockEvents.filter(event => event.expired)

  return (
    <>
      <Header />
      <div className={cs.eventsContainer}>
        <EventsList key="nextEvents" title="Próximos eventos" events={upcomingEvents} />
        <EventsList key="prevEvents" title="Eventos pasados" events={pastEvents} />
      </div>
    </>
  );
}

export default withStyles(styles)(Events);
