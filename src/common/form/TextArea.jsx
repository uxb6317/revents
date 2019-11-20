import React from "react";
import { Form } from "semantic-ui-react";
import { useField } from "formik";

const TextArea = ({ field, ...props }) => {
  const [input, { touched, error }] = useField(field);

  return (
    <Form.TextArea
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

export default TextArea;
