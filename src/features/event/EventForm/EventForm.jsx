import React, { useState, useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent, closeEventForm } from "../eventSlice";

const INITIAL_FORM = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

const EventForm = ({
  createEvent,
  selectedEvent,
  updateEvent,
  closeEventForm
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const { title, date, city, venue, hostedBy } = formData;

  useEffect(() => {
    if (selectedEvent) {
      setFormData({ ...selectedEvent });
    } else {
      setFormData(INITIAL_FORM);
    }
  }, [selectedEvent]);

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.id) return updateEvent(formData);
    createEvent(formData);
    setFormData(INITIAL_FORM);
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
            placeholder='First Name'
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
        <Button onClick={() => closeEventForm()} type='button'>
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};

const mapStateToProps = state => ({
  selectedEvent: state.events.selectedEvent
});

export default connect(
  mapStateToProps,
  { createEvent, updateEvent, closeEventForm }
)(EventForm);
