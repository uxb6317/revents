import React, { useState, useEffect } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import cuid from 'cuid';

import { createEvent, updateEvent } from '../eventSlice';
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from '../../../common/form/SelectInput';
import DateInput from '../../../common/form/DateInput';

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'The category is required' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be atleast 5 characters'
    })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

const EventForm = ({
  createEvent,
  initialValues,
  updateEvent,
  history,
  handleSubmit,
  invalid,
  submitting,
  pristine
}) => {
  const onFormSubmit = values => {
    if (initialValues.id) {
      updateEvent(values);
      history.push(`/events/${initialValues.id}`);
    } else {
      const id = cuid();
      createEvent({
        ...values,
        id,
        hostPhotoURL: '/assets/images/user.png',
        hostedBy: 'Bob'
      });
      history.push(`/events/${id}`);
    }
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete='off'>
            <Header sub color='teal' content='Event Details' />
            <Field
              name='title'
              component={TextInput}
              placeholder='Give your event a name'
            />
            <Field
              name='category'
              component={SelectInput}
              options={category}
              placeholder="What's your event about?"
            />
            <Field
              name='description'
              component={TextArea}
              rows={3}
              placeholder='Tell us about your event'
            />
            <Header sub color='teal' content='Event Location Details' />
            <Field name='city' component={TextInput} placeholder='Event city' />
            <Field
              name='venue'
              component={TextInput}
              placeholder='Event venue'
            />
            <Field
              name='date'
              component={DateInput}
              normalize={value => value && value.toString()}
              dateFormat='dd LLL yyyy h:mm a'
              showTimeSelect
              timeFormat='HH:mm'
              placeholder='Event date'
            />
            <Button
              disabled={invalid || submitting || pristine}
              positive
              type='submit'
            >
              Submit
            </Button>
            <Button
              onClick={
                initialValues.id
                  ? () => history.push(`/events/${initialValues.id}`)
                  : () => history.push('/events')
              }
              type='button'
            >
              Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = ({ eventsState: { events } }, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && events.length > 0)
    event = events.filter(e => e.id === eventId)[0];

  return { initialValues: event };
};

export default connect(mapStateToProps, { createEvent, updateEvent })(
  reduxForm({ form: 'eventForm', validate })(EventForm)
);
