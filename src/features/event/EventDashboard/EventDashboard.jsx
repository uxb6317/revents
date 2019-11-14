import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { openEventForm } from '../eventSlice';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const EventDashboard = ({ eventFormVisible, openEventForm }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button
          onClick={() => openEventForm()}
          positive
          content='Create Event'
        />
        {eventFormVisible && <EventForm />}
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = state => ({
  eventFormVisible: state.events.eventFormVisible
});

export default connect(
  mapStateToProps,
  { openEventForm }
)(EventDashboard);
