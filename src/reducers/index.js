import { combineReducers } from 'redux';

import eventsReducer from '../features/event/eventSlice';
import modalReducer from '../features/modals/modalSlice';
import authSlice from '../features/auth/authSlice';

export default combineReducers({
  eventsState: eventsReducer,
  modalState: modalReducer,
  authState: authSlice
});
