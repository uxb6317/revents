import React from 'react';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';

const FormikInput = ({ field, form, ...props }) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;

  return (
    <Form.Input
      {...input}
      {...props}
      error={
        touched &&
        !!error && {
          content: error,
          pointing: 'above'
        }
      }
    />
  );
};

export default FormikInput;
