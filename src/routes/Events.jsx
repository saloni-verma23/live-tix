import { useSelector } from "react-redux";
import EventCard from "../components/EventCard";
const Events = () => {
  const { events, selectedEventType } = useSelector((state) => state.events);

  // Filter events based on selected type
  const filteredEvents =
    selectedEventType === "all"
      ? events
      : events.filter((event) => event.eventType === selectedEventType);

  return (
    <>
      <div className="container event-list">
        <div className="row row-cols-3">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Events;
