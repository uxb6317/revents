import React from 'react';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';

const SelectInput = ({ field, form: { setFieldValue }, ...props }) => {
  const [input, { touched, error }] = useField(field);

  return (
    <Form.Select
      {...input} // name, value, onBlur, onChange
      {...props} // label, options, placeholder
      id={input.name}
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

export default SelectInput;
