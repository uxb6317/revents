import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import eventsReducer from '../features/event/eventSlice';

export default combineReducers({
  form: FormReducer,
  eventsState: eventsReducer
});
