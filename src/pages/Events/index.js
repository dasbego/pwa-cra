import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EventsList from '../../components/EventsList';
import PageContainer from '../../components/PageContainer';
import { getEvents } from '../../libraries/api';
import { updateEvents } from '../../store/actions/events';

const styles = {
  eventsContainer: {
    padding: '1rem'
  }
}

class Events extends React.Component {
  state = {
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
        });
        this.props.updateEvents(res.data.body)
      })
      .catch(err => {
        this.setState({
          isLoading: false
        });
      });
  }

  render () {
    const cs = this.props.classes;
    const { events } = this.props;
    const upcomingEvents = events.filter(event => !event.isExpired)
    const pastEvents = events.filter(event => event.isExpired)
    const { isLoading } = this.state;

    return (
      <PageContainer>
        <div className={cs.eventsContainer}>
          <EventsList isLoading={isLoading} key="nextEvents" title="Próximos eventos" events={upcomingEvents} />
          <EventsList isLoading={isLoading} key="prevEvents" title="Eventos pasados" events={pastEvents} />
        </div>
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ events }) => ({
  events
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateEvents
}, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Events));
