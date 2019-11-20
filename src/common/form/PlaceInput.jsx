import React from 'react';
import { Form, Segment, List } from 'semantic-ui-react';
import { useField } from 'formik';
import PlacesAutocomplete from 'react-places-autocomplete';

const PlaceInput = ({
  field,
  form: { setFieldValue },
  options,
  placeholder,
  label
}) => {
  const [input, meta] = useField(field);
  const { touched, error } = meta;
  const { name, value, onBlur } = input;

  return (
    <PlacesAutocomplete
      value={value}
      onChange={address => setFieldValue(name, address)}
      // searchOptions={options}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <>
          <Form.Input
            {...input}
            {...getInputProps({ placeholder, label, onBlur })}
            error={
              touched &&
              !!error && {
                content: error,
                pointing: 'above'
              }
            }
          />
          {suggestions.length > 0 && (
            <Segment>
              {loading && <div>Loading...</div>}
              <List selection>
                {suggestions.map(s => (
                  <List.Item {...getSuggestionItemProps(s)}>
                    <List.Header>{s.formattedSuggestion.mainText}</List.Header>
                    <List.Description>
                      {s.formattedSuggestion.secondaryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </>
      )}
    </PlacesAutocomplete>
  );
};

export default PlaceInput;
