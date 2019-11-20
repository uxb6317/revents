import React from "react";
import { Form } from "semantic-ui-react";
import { useField } from "formik";

const TextInput = ({ field, ...props }) => {
  const [input, { touched, error }] = useField(field);

  return (
    <Form.Input
      {...input}
      {...props}
      error={
        touched &&
        !!error && {
          content: error,
          pointing: "above"
        }
      }
    />
  );
};

export default TextInput;
