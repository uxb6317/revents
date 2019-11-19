import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Grid, Segment, Form, Header, FormTextArea } from 'semantic-ui-react';
import * as Yup from 'yup';

import FormikInput from '../../../common/form/FormikInput';
import FormikSelect from '../../../common/form/FormikSelect';
import FormikTextArea from '../../../common/form/FormikTextArea';
import FormikDate from '../../../common/form/FormikDate';

const category = [
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
  venue: Yup.string().required('Required')
});

const FormikForm = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>
          <Formik
            initialValues={{
              title: '',
              category: '',
              description: '',
              city: '',
              venue: '',
              date: ''
            }}
            validationSchema={validation}
            onSubmit={(values, actions) => {
              console.log(values);
            }}
          >
            {props => (
              <Form onSubmit={props.handleSubmit} autoComplete='off'>
                <Header sub color='teal' content='Event Details' />
                <Field
                  label='Title'
                  name='title'
                  placeholder='Event title'
                  component={FormikInput}
                />
                <Field
                  label='Category'
                  name='category'
                  placeholder="What's your event about?"
                  options={category}
                  component={FormikSelect}
                />
                <Field
                  label='Description'
                  name='description'
                  placeholder='Tell us about your event'
                  rows={3}
                  component={FormikTextArea}
                />
                <Header sub color='teal' content='Event Location Details' />
                <Field
                  label='City'
                  name='city'
                  placeholder='Event city'
                  component={FormikInput}
                />
                <Field
                  label='Venue'
                  name='venue'
                  placeholder='Event venue'
                  component={FormikInput}
                />
                <Field
                  label='Date'
                  name='date'
                  dateFormat='dd LLL yyyy h:mm a'
                  showTimeSelect
                  timeFormat='HH:mm'
                  placeholder='Event date'
                  component={FormikDate}
                />
              </Form>
            )}
          </Formik>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default FormikForm;

// title
// category
// description
// city
// venue
// date
