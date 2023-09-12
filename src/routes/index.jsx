import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Routes = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Routes;
