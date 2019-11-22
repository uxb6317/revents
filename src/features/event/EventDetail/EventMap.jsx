import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon, Segment } from 'semantic-ui-react';

const EventMap = ({ venueLatLng }) => {
  const zoom = 14;

  return (
    <Segment attached='bottom' style={{ padding: 0 }}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAtYZN4t3BK9vPpV_FHYnhe6qYTipYTRfQ' }}
          defaultCenter={venueLatLng}
          defaultZoom={zoom}
        >
          <Marker {...venueLatLng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

const Marker = () => <Icon name='marker' size='big' color='red' />;

export default EventMap;
