import { useDispatch } from "react-redux";
import { eventActions } from "../store/eventSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedEventType = useSelector(
    (state) => state.events.selectedEventType
  );

  const handleEventTypeChange = (eventType) => {
    dispatch(eventActions.setEventType(eventType));
  };
  return (
    <div className="d-flex flex-column flex-shrink-0 p-4 sidebar d-none d-md-block d-lg-block">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/events"
            className={`nav-link sidebar-link ${
              selectedEventType === "concert" ? "active-link" : ""
            }`}
            onClick={() => handleEventTypeChange("concert")}
          >
            Concerts
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`nav-link sidebar-link ${
              selectedEventType === "theater" ? "active-link" : ""
            }`}
            onClick={() => handleEventTypeChange("theater")}
          >
            Theater
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`nav-link sidebar-link ${
              selectedEventType === "comedy" ? "active-link" : ""
            }`}
            onClick={() => handleEventTypeChange("comedy")}
          >
            Comedy
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={`nav-link sidebar-link ${
              selectedEventType === "festival" ? "active-link" : ""
            }`}
            onClick={() => handleEventTypeChange("festival")}
          >
            Festivals
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
