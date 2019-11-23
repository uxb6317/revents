import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import TextInput from '../../../common/form/TextInput';
import { login } from '../authSlice';

const validation = Yup.object({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string().required('Required')
});

const LoginForm = ({ login }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        login({ creds: { ...values } });
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
        <Form
          onSubmit={handleSubmit}
          loading={isSubmitting}
          autoComplete='off'
          size='large'
        >
          <Segment>
            <Field
              label='Email'
              name='email'
              type='email'
              placeholder='Email Address'
              component={TextInput}
            />
            <Field
              label='Password'
              name='password'
              type='password'
              placeholder='password'
              component={TextInput}
            />
            <Button
              disabled={!isValid || isSubmitting || !dirty}
              type='submit'
              fluid
              size='large'
              color='teal'
            >
              Login
            </Button>
          </Segment>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { login })(LoginForm);
