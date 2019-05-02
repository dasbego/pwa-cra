import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import EventsList from '../../components/EventsList';
import PageContainer from '../../components/PageContainer';
import { getEvents } from '../../libraries/api';

const styles = {
  eventsContainer: {
    padding: '1rem'
  }
}

class Events extends React.Component {
  state = {
    events: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    getEvents()
      .then(res => {
        this.setState({
          isLoading: false,
          events: res.data.body
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
      });
  }

  render () {
    const cs = this.props.classes;
    const upcomingEvents = this.state.events.filter(event => !event.isExpired)
    const pastEvents = this.state.events.filter(event => event.isExpired)
    const { isLoading } = this.state;

    return (
      <>
        <Header />
        <PageContainer>
          <div className={cs.eventsContainer}>
            <EventsList isLoading={isLoading} key="nextEvents" title="Próximos eventos" events={upcomingEvents} />
            <EventsList isLoading={isLoading} key="prevEvents" title="Eventos pasados" events={pastEvents} />
          </div>
        </PageContainer>
      </>
    );
  }
}

export default withStyles(styles)(Events);
