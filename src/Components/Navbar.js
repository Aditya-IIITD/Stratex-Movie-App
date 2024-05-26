import { Link, Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="bg-custom-color p-6 text-white font-semibold flex gap-6 md:gap-10 items-center">
        <div>
          <h1 className=" text-lg md:text-xl cursor-default">Stratex</h1>
        </div>
        <div className="flex gap-4 md:gap-6 ">
          <Link to="/"> Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;
