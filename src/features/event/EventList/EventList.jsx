import React from "react";
import { connect } from "react-redux";

import EventListItem from "./EventListItem";

const EventList = ({ events }) => {
  return (
    <>
      {events.map(event => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};

const mapStateToProps = ({ eventsState: { events } }) => ({
  events
});

export default connect(mapStateToProps)(EventList);
