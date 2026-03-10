import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import Favourite from "./components/Favourite.jsx";
import { AnimeContextProvider } from "./context/AnimeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "favourite",
        element: <Favourite />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimeContextProvider>
      <RouterProvider router={router} />
    </AnimeContextProvider>
  </StrictMode>,
);
