import React from 'react';
import { Segment, Item, Label } from 'semantic-ui-react';

const EventDetailSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendees.length}{' '}
        {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map((attendee, i) => (
              <Item key={i} style={{ position: 'relative' }}>
                {isHost && (
                  <Label
                    style={{ position: 'absolute' }}
                    color='orange'
                    ribbon='right'
                  >
                    Host
                  </Label>
                )}
                <Item.Image size='tiny' src={attendee.photoURL} />
                <Item.Content verticalAlign='middle'>
                  <Item.Header as='h3'>{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </>
  );
};

export default EventDetailSidebar;
