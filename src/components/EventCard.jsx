import "./EventCard.css";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  return (
    <>
      <div className="card col p-2 m-4 event-card" style={{ width: "20rem" }}>
        <img src={event.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title card-heading card-details">
            {event.title}
          </h3>
          <p className="event-date-time">
            <span className="event-date-time card-details">
              Date&Time: {event.dateTime}
            </span>
          </p>
          <p className="event-location card-details">
            Location: {event.location}
          </p>
          <p className="event-price card-details">Price: {event.price}</p>
          <div className="d-flex">
            <Link
              to={`/booking/${event.id}`}
              className="event-cta-btn btn btn-outline-light"
            >
              Book Now
            </Link>
            <div className="ms-2 mt-2 card-details text-primary">
              {event.seatsAvailable} seats available
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCard;
