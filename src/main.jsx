import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./routes/Home.jsx";
import App from "./routes/App.jsx";
import Events from "./routes/Events.jsx";
import eventStore from "./store/Index.js";
import Booking from "./components/Booking.jsx";
import Admin from "./routes/Admin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/booking/:eventId",
        element: <Booking />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={eventStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
