import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Favorites from "./Pages/FavoriteMovies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <ToastContainer />
    </div>
  );
}

export default App;
