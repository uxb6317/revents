import React from 'react';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';

const FormikSelect = ({ field, form: { setFieldValue }, ...props }) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;

  return (
    <Form.Select
      {...input} // name, value, onBlur, onChange
      {...props} // label, options, placeholder
      error={
        touched &&
        !!error && {
          content: error,
          pointing: 'above'
        }
      }
      selectOnBlur={false}
      onChange={(e, { name, value }) => setFieldValue(name, value)}
    />
  );
};

export default FormikSelect;
