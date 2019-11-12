import React from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { connect } from "react-redux";
import { selectEvent, deleteEvent } from "../eventSlice";
import { Link } from "react-router-dom";

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  const {
    hostPhotoURL,
    title,
    hostedBy,
    date,
    venue,
    description,
    attendees
  } = event;

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header as='a'>{title}</Item.Header>
              <Item.Description>
                Hosted by <a>{hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {date} |
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees &&
            attendees.map(attendee => (
              <EventListAttendee key={attendee.id} {...attendee} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{description}</span>
        <Button
          onClick={() => deleteEvent(event.id)}
          as='a'
          color='red'
          floated='right'
          content='Delete'
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
};

export default connect(
  null,
  { selectEvent, deleteEvent }
)(EventListItem);
