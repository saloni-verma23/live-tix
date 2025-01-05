import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ToggleButton from "./ToggleButton";
const Header = () => {
  return (
    <>
      <header className={`p-0 p-md-3 ${styles.header}`}>
        <div>
          <ul className="nav">
            <li>
              <img className={styles.logo} src="logo.png" alt="logo" />
            </li>

            <li className="d-none d-md-block d-lg-block">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className={`form-control ${styles.search}`}
                  placeholder="Search for treatments, salons, or at-home services..."
                  aria-label="Search"
                />
              </form>
            </li>

            <div className="d-flex">
              <li className={`nav-item ${styles.nav_menu}`}>
                <Link to="/" className={`nav-link ${styles.nav_links}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className={`nav-link ${styles.nav_links}`}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/admin" className={`nav-link ${styles.nav_links}`}>
                  Admin
                </Link>
              </li>
            </div>
            <div className=" d-flex ms-md-5 ms-lg-5">
              <li className="d-none d-md-block d-lg-block ms-md-5 ms-lg-5">
                <ToggleButton></ToggleButton>
              </li>
              <li className="d-none d-md-block d-lg-block ms-md-3 ms-lg-3">
                <button type="button" className={`btn ${styles.loginBtn}`}>
                  Login
                </button>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
