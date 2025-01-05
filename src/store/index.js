import {configureStore} from "@reduxjs/toolkit";
import eventSlice from "./EventSlice";

const eventStore = configureStore({
    reducer: { events: eventSlice.reducer}
});
export default eventStore;