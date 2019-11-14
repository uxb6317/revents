import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import EventList from "../EventList/EventList";

const EventDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button as={Link} to='/createEvent' positive content='Create Event' />
        <h2>Activity Feed</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
