import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

const Principal = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Principal;
