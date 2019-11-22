/*global google*/
import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import { Grid, Segment, Form, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import cuid from 'cuid';
import * as Yup from 'yup';

import { getLatLngFromAddress } from '../../../util/GoogleMapsUtil';
import { createEvent, updateEvent } from '../eventSlice';
import TextInput from '../../../common/form/TextInput';
import SelectInput from '../../../common/form/SelectInput';
import TextArea from '../../../common/form/TextArea';
import DateInput from '../../../common/form/DateInput';
import PlaceInput from '../../../common/form/PlaceInput';

const categoryList = [
  { text: 'Drinks', value: 'drinks' },
  { text: 'Culture', value: 'culture' },
  { text: 'Film', value: 'film' },
  { text: 'Food', value: 'food' },
  { text: 'Music', value: 'music' },
  { text: 'Travel', value: 'travel' }
];

const validation = Yup.object({
  title: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
  category: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  venue: Yup.string().required('Required'),
  date: Yup.string().required('Required')
});

const emptyForm = {
  title: '',
  category: '',
  description: '',
  city: '',
  venue: '',
  date: ''
};

const EventForm = ({ event, history, updateEvent, createEvent }) => {
  const [cityLatLng, setCityLatLng] = useState({});
  const [venueLatLng, setVenueLatLng] = useState({});

  // load cityLatLng to local state from city address
  useEffect(() => {
    if (!event) return;
    (async () => setCityLatLng(await getLatLngFromAddress(event.city)))();
  }, []);

  const handleCitySelect = async selectedCity => {
    setCityLatLng(await getLatLngFromAddress(selectedCity));
  };

  const handleVenueSelect = async selectedVenue => {
    setVenueLatLng(await getLatLngFromAddress(selectedVenue));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Formik
            initialValues={event ? { ...event } : emptyForm}
            validationSchema={validation}
            onSubmit={(values, actions) => {
              values.venueLatLng = venueLatLng;

              if (event) {
                updateEvent(values);
                actions.setSubmitting(false);
                history.push(`/events/${event.id}`);
              } else {
                const id = cuid();

                createEvent({
                  ...values,
                  id,
                  hostPhotoURL: '/assets/images/user.png',
                  hostedBy: 'Bob'
                });

                actions.setSubmitting(false);
                history.push(`/events/${id}`);
              }
            }}
          >
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit} autoComplete='off'>
                <Header sub color='teal' content='Event Details' />
                <Field
                  label='Title'
                  name='title'
                  placeholder='Event title'
                  component={TextInput}
                />
                <Field
                  label='Category'
                  name='category'
                  placeholder="What's your event about?"
                  options={categoryList}
                  component={SelectInput}
                />
                <Field
                  label='Description'
                  name='description'
                  placeholder='Tell us about your event'
                  rows={3}
                  component={TextArea}
                />
                <Header sub color='teal' content='Event Location Details' />
                <Field
                  label='City'
                  name='city'
                  placeholder='Event city'
                  component={PlaceInput}
                  onSelect={handleCitySelect}
                  options={{ types: ['(cities)'] }}
                />
                <Field
                  label='Venue'
                  name='venue'
                  placeholder='Event venue'
                  component={PlaceInput}
                  options={{
                    location: new google.maps.LatLng(cityLatLng),
                    radius: 1000,
                    types: ['establishment']
                  }}
                  onSelect={handleVenueSelect}
                />
                <Field
                  label='Date'
                  name='date'
                  dateFormat='dd LLL yyyy h:mm a'
                  showTimeSelect
                  timeFormat='HH:mm'
                  placeholder='Event date'
                  component={DateInput}
                  minDate={new Date()}
                  showDisabledMonthNavigation
                  timeIntervals={15}
                />
                <Button
                  disabled={!isValid || isSubmitting || !dirty}
                  positive
                  type='submit'
                >
                  Submit
                </Button>
                <Button
                  onClick={
                    event
                      ? () => history.push(`/events/${event.id}`)
                      : () => history.push('/events')
                  }
                  type='button'
                >
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = ({ eventsState: { events } }, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = null;

  if (eventId && events.length > 0)
    event = events.filter(e => e.id === eventId)[0];

  return { event };
};

export default connect(mapStateToProps, { createEvent, updateEvent })(
  EventForm
);
