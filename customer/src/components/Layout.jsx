import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const isAuth =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register";
  // const order = location.pathname ==="/order"
  // console.log(isAuth)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {!isAuth && <Navbar />}

        <div className="flex-grow">
          <Outlet />
        </div>
        {/* {!order && <Footer />} */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
