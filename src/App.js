import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Favorites from "./Components/FavoriteMovies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    </div>
  );
}

export default App;
