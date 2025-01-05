import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./BookingPage.css";
import { useRef } from "react";
import { eventActions } from "../store/eventSlice";

const BookingPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { eventId } = useParams(); // Access the eventId from the URL
  const { events } = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const event = events.find((event) => event.id === eventId);
  const numOfTickets = useRef(null);

  if (!event) {
    return <div>Event not found</div>;
  }

  const calculateTotalPrice = () => {
    const tickets = parseInt(numOfTickets.current?.value || 0, 10); // Get value safely
    setTotalPrice(tickets * event.price);
  };

  const handleBookNow = () => {
    const tickets = numOfTickets.current?.value; // Access tickets value safely
    if (!tickets) {
      alert("Please enter the number of tickets.");
      return;
    }
    const confirmation = window.confirm(
      `Are you sure you want to book ${tickets} tickets for ${event.title}? Total Price: ${totalPrice}`
    );
    if (confirmation) {
      alert(`You have successfully booked ${tickets} tickets!`);
      // Proceed with booking logic here
    }
    dispatch(
      eventActions.updateTickets({
        eventId: event.id,
        tickets: parseInt(tickets),
      })
    );
    setTotalPrice(0);
    numOfTickets.current.value = null;
  };

  return (
    <>
      <div
        className="m-2 m-lg-4 p-2 p-lg-4 booking-page container text-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <p className="card-details booking-details">{event.title}</p>
        <div className="booking-details">
          <img src={event.image} alt="booking-image" className="m-2 book-img" />
          <p className="m-auto align-items-center card-details">
            {event.description}
          </p>
          <p className="card-details">Date&Time: {event.dateTime}</p>
          <p className="card-details">
            Location: {event.location}{" "}
            <span className="text-danger">
              (Only {event.seatsAvailable} seats available)
            </span>
          </p>
          <p className="card-details">Price Per Ticket: {event.price}</p>
          <p className="card-details">
            No. of Tickets:
            <input
              type="number"
              className="input-box"
              ref={numOfTickets}
              onChange={calculateTotalPrice} // Update total price on input change
            />
          </p>
          <p className="card-details">Total Price: {totalPrice}</p>
          <button className="btn btn-danger btn-sm" onClick={handleBookNow}>
            Confirm Booking
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
