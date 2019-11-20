import { combineReducers } from "redux";
import eventsReducer from "../features/event/eventSlice";

export default combineReducers({
  eventsState: eventsReducer
});
