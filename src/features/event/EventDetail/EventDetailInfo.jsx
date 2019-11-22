import React, { useState } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventMap from './EventMap';

const EventDetailInfo = ({
  event: { venue, description, date, venueLatLng }
}) => {
  const [mapOpen, toggleMapOpen] = useState(false);

  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              color='teal'
              size='tiny'
              content={mapOpen ? 'Hide Map' : 'Show Map'}
              onClick={() => toggleMapOpen(!mapOpen)}
            />
          </Grid.Column>
          {mapOpen && <EventMap venueLatLng={venueLatLng} />}
        </Grid>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailInfo;
