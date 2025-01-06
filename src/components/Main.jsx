import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
const Main = () => {
  return (
    <div
      className="position-relative overflow-hidden p-3 p-md-5 m-2 m-md-3 m-md-3 text-center hero"
      style={{ backgroundImage: "url(hero.jpg)" }}
    >
      <div className="col-md-6.5 p-lg-5 mx-auto my-5">
        <div>
          <p className="display-10 fw-bold hero-text">
            <AnimatedText
              text={"Catch  Your  Favorite  Artists  Live!!!"}
            ></AnimatedText>
          </p>
        </div>
        <div className="d-flex gap-3 justify-content-left lead fw-normal">
          <button className="btn hero-button">
            <Link to="/events" className="text-light text-decoration-none">
              Book Now
            </Link>
          </button>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
  );
};

export default Main;
