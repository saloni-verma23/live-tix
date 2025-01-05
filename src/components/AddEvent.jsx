import { eventActions } from "../store/eventSlice";
import { useDispatch } from "react-redux";
import styles from "./AddEvent.module.css";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null); // State to hold the image URL

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const url = URL.createObjectURL(file); // Generate the URL for the selected file
      setImageUrl(url); // Set the image URL to state
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);

    // Convert formData to an object and add the imagePath
    const addData = Object.fromEntries(formData.entries());
    addData.image = imageUrl;
    console.log(imageUrl);
    // Dispatch the action
    dispatch(eventActions.addEvent(addData));
    return navigate("/events");
  };

  return (
    <div
      className="m-4 p-4 booking-page container"
      style={{ backgroundColor: "var(--c5)" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="create-post post_form m-2"
        method="POST"
      >
        <div className="mb-3">
          <label htmlFor="userId" className={`form-label ${styles.labelText}`}>
            Event ID
          </label>
          <input
            type="text"
            name="id"
            className={`form-control ${styles.controlText}`}
            id="userId"
            placeholder="Enter Event Id"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="formFile"
            className={`form-label ${styles.labelText}`}
          >
            Select image
          </label>
          <input
            className={`form-control ${styles.controlText}`}
            type="file"
            name="image"
            id="formFile"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className={`form-label ${styles.labelText}`}>
            Event Title
          </label>
          <input
            type="text"
            name="title"
            className={`form-control ${styles.controlText}`}
            id="title"
            placeholder="The name of the upcoming event...."
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="dateTime"
            className={`form-label ${styles.labelText}`}
          >
            Date & Time
          </label>
          <input
            type="datetime-local"
            name="dateTime"
            className={`form-control ${styles.controlText}`}
            id="dateTime"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="location"
            className={`form-label ${styles.labelText}`}
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            className={`form-control ${styles.controlText}`}
            id="location"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className={`form-label ${styles.labelText}`}>
            Price
          </label>
          <input
            type="number"
            name="price"
            className={`form-control ${styles.controlText}`}
            id="price"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="seatsAvailable"
            className={`form-label ${styles.labelText}`}
          >
            Seats Available
          </label>
          <input
            type="number"
            name="seatsAvailable"
            className={`form-control ${styles.controlText}`}
            id="seatsAvailable"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className={`form-label ${styles.labelText}`}>
            Event Description
          </label>
          <textarea
            type="text"
            name="description"
            rows="4"
            className={`form-control ${styles.controlText}`}
            id="body"
            placeholder="Tell us more about it...."
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="eventType"
            className={`form-label ${styles.labelText}`}
          >
            Event Type
          </label>
          <select
            name="eventType"
            className={`form-control ${styles.controlText}`}
            id="eventType"
          >
            <option value="none">Select Event Type</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="comedy">Comedy</option>
            <option value="theater">Theater</option>
          </select>
        </div>
        <button type="submit" className={`btn btn-danger my-2`}>
          Add Event
        </button>
      </Form>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddEvent;
