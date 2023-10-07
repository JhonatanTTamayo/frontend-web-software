import { Outlet, Link } from "react-router-dom";

import "./LayoutPage.scss";


const Layout = () => {
  return (
    <>
        <div className="Links">
          
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Signup">SignUp</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          
        </div>
      <Outlet />
    </>
  )
};

export default Layout;
