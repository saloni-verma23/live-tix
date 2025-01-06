import {configureStore} from "@reduxjs/toolkit";
import eventSlice from "./eventSlice";

const eventStore = configureStore({
    reducer: { events: eventSlice.reducer}
});
export default eventStore;