import { Outlet } from "react-router-dom";
import RecipeNavbar from "./RecipeNavbar";

function Layout() {
  return (
    <>
      <RecipeNavbar />
      <div className="container my-3">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
