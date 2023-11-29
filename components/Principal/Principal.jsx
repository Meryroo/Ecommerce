import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";



const Principal = () => {
  return (
    <>
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
    
    </>
  );
};

export default Principal;
