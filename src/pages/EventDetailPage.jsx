import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "../features/event/EventDetail/EventDetailHeader";
import EventDetailChat from "../features/event/EventDetail/EventDetailChat";
import EventDetailInfo from "../features/event/EventDetail/EventDetailInfo";
import EventDetailSidebar from "../features/event/EventDetail/EventDetailSidebar";

const EventDetailPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};

  if (eventId && state.events.events.length > 0) {
    event = state.events.events.filter(event => event.id === eventId)[0];
  }

  return { event };
};

export default connect(mapStateToProps)(EventDetailPage);
