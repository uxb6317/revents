import React from 'react';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormikDate = ({ field, form, placeholder, ...props }) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;

  return (
    <Form.Field
      // {...input}
      // {...props}
      error={
        touched &&
        !!error && {
          content: error,
          pointing: 'above'
        }
      }
    >
      <DatePicker
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()}
        {...props}
      />
    </Form.Field>
  );
};

export default FormikDate;
