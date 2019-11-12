import React from "react";
import EventListItem from "./EventListItem";
import { connect } from "react-redux";

const EventList = ({ events }) => {
  return (
    <>
      {events.map(event => (
        <EventListItem key={event.id} event={event} />
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  events: state.events.events
});

export default connect(mapStateToProps)(EventList);
