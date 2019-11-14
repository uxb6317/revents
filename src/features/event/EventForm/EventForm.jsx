import React, { useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";

import { createEvent, updateEvent } from "../eventSlice";

const INITIAL_FORM = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

const EventForm = ({ createEvent, event, updateEvent, history }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const { title, date, city, venue, hostedBy } = formData;

  useEffect(() => {
    if (event) setFormData({ ...event });
    else setFormData(INITIAL_FORM);
  }, [event]);

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.id) {
      updateEvent(formData);
      history.push(`/events/${formData.id}`);
    } else {
      const id = cuid();
      createEvent({
        ...formData,
        id,
        hostPhotoURL: "/assets/images/user.png"
      });
      setFormData(INITIAL_FORM);
      history.push("/events");
      // history.push(`/events/${id}`);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Field>
          <label>Event Title</label>
          <input
            value={title}
            name='title'
            onChange={handleChange}
            placeholder='Title'
          />
        </Form.Field>
        <Form.Field>
          <label>Event Date</label>
          <input
            value={date}
            name='date'
            onChange={handleChange}
            type='date'
            placeholder='Event Date'
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            value={city}
            name='city'
            onChange={handleChange}
            placeholder='City event is taking place'
          />
        </Form.Field>
        <Form.Field>
          <label>Venue</label>
          <input
            value={venue}
            name='venue'
            onChange={handleChange}
            placeholder='Enter the Venue of the event'
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted By</label>
          <input
            value={hostedBy}
            name='hostedBy'
            onChange={handleChange}
            placeholder='Enter the name of person hosting'
          />
        </Form.Field>
        <Button positive type='submit'>
          Submit
        </Button>
        <Button onClick={history.goBack} type='button'>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

const mapStateToProps = ({ eventsState: { events } }, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = null;

  if (eventId && events.length > 0)
    event = events.filter(e => e.id === eventId)[0];

  return { event };
};

export default connect(
  mapStateToProps,
  { createEvent, updateEvent }
)(EventForm);
