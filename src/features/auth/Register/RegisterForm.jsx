import React from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import TextInput from '../../../common/form/TextInput';

const validation = Yup.object({
  email: Yup.string()
    .email()
    .required('Required'),
  password: Yup.string().required('Required'),
  displayName: Yup.string().required('Required')
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', displayName: '' }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, isValid, isSubmitting, dirty }) => (
        <Form
          onSubmit={handleSubmit}
          loading={isSubmitting}
          autoComplete='off'
          error
          size='large'
        >
          <Segment>
            <Field
              label='Display Name'
              name='displayName'
              type='text'
              placeholder='Known As'
              component={TextInput}
            />
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

export default RegisterForm;
