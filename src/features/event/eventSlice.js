import { createSlice } from '@reduxjs/toolkit';
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        // id: "b",
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

const initialState = {
  events: eventsFromDashboard,
  selectedEvent: null,
  eventFormVisible: false
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent(state, action) {
      const newEvent = action.payload;
      state.events.push({
        ...newEvent,
        id: cuid(),
        hostPhotoURL: '/assets/images/user.png'
      });
      state.eventFormVisible = false;
    },

    updateEvent(state, action) {
      const updatedEvent = action.payload;
      state.events = state.events.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      state.eventFormVisible = false;
      state.selectedEvent = null;
    },

    selectEvent(state, action) {
      state.eventFormVisible = true;
      state.selectedEvent = action.payload;
    },

    deleteEvent(state, action) {
      const id = action.payload;
      state.events = state.events.filter(event => event.id !== id);
      if (state.selectedEvent && id === state.selectedEvent.id) {
        state.selectedEvent = null;
      }
    },

    openEventForm(state) {
      state.eventFormVisible = true;
    },

    closeEventForm(state, action) {
      state.eventFormVisible = action.payload;
      state.selectedEvent = null;
    }
  }
});

export const {
  createEvent,
  updateEvent,
  selectEvent,
  deleteEvent,
  toggleEventForm,
  openEventForm,
  closeEventForm
} = eventSlice.actions;
export default eventSlice.reducer;
