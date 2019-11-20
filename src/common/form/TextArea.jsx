import React from "react";
import { Form } from "semantic-ui-react";
import { useField } from "formik";

const TextArea = ({ field, form, ...props }) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;

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
