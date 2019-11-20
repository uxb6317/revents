import React from 'react';
import { Form } from 'semantic-ui-react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
  field,
  form: { setFieldValue },
  placeholder,
  label,
  ...props
}) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;
  const { onBlur, value, name } = input;

  return (
    <Form.Input
      {...input}
      label={label}
      control={() => (
        <DatePicker
          {...props}
          id={name}
          placeholderText={placeholder}
          selected={value ? new Date(value) : null}
          onChange={date => setFieldValue(name, date.toString())}
          onBlur={onBlur}
          onChangeRaw={e => e.preventDefault()}
        />
      )}
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

export default DateInput;
