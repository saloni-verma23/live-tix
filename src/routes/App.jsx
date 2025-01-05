import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "../App.css";

function App() {
  return (
    <>
      <Header />
      <div className="d-flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
