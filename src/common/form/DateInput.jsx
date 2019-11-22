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
  const [input, { touched, error }] = useField(field);
  const { onBlur, value, name } = input;

  return (
    <Form.Field error={touched && !!error}>
      <label>{label}</label>
      <DatePicker
        {...props}
        id={name}
        placeholderText={placeholder}
        selected={value ? new Date(value) : null}
        onChange={value => setFieldValue(name, value.toString())}
        onChangeRaw={e => e.preventDefault()}
        onBlur={onBlur}
      />
    </Form.Field>
  );
};

export default DateInput;
