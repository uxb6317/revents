import React, { useState } from 'react';
import { Form, Segment, List } from 'semantic-ui-react';
import { useField } from 'formik';
import PlacesAutocomplete from 'react-places-autocomplete';

const PlaceInput = ({
  field,
  form: { setFieldValue },
  options,
  placeholder,
  onSelect,
  label
}) => {
  const [input, { touched, error }] = useField(field);
  const { name, value, onBlur } = input;

  return (
    <PlacesAutocomplete
      value={value}
      onChange={address => setFieldValue(name, address)}
      onSelect={place => {
        onSelect(place);
        setFieldValue(name, place);
      }}
      searchOptions={options}
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
