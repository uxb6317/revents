import React from "react";
import { Form } from "semantic-ui-react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  field,
  form: { setFieldValue },
  placeholder,
  label,
  ...props
}) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;

  return (
    <Form.Field error={touched && !!error}>
      <label>{label}</label>
      <DatePicker
        {...props}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={value => setFieldValue(input.name, value.toString())}
        onChangeRaw={e => e.preventDefault()}
      />
    </Form.Field>
  );
};

export default DateInput;
