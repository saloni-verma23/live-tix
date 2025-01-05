import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_EVENTS } from "../data/events"; // Assuming this contains the initial events data
import { redirect } from "react-router-dom";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: DEFAULT_EVENTS,  // Store the events in the state
    selectedEventType: "all" // Optionally, you could have a filter here
  },
  reducers: {
    addInitialEvents: (state, action) => {
      // Assuming action.payload contains the events to be added
      state.events = action.payload;
    },
    setEventType: (state, action) => {
      state.selectedEventType = action.payload;
    },
    updateTickets: (state, action)=>{
      const { eventId, tickets } = action.payload;
      const event = state.events.find((event) => event.id === eventId);
      if (event) {
        console.log(event.seatsAvailable);
        event.seatsAvailable = event.seatsAvailable - tickets; // Update the number of tickets
      }
    },
    addEvent: (state, action) => {
      console.log(action.payload.image);

      state.events.unshift(action.payload);
      console.log(state.events);
    },
  }
});

export const eventActions = eventSlice.actions;
export default eventSlice;
