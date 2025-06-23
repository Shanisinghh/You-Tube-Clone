import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";
import VedioPlayer from "./components/VedioPlayer";

import { createBrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataProvider.jsx";

export const PathRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // element: <VedioPlayer />,
    errorElement: <div>Page Not Found</div>,
  },
  {
    path: "/video/:id",
    element: <VedioPlayer />,
  },
  {
    path: "/search/:searchquery",
    element: <Search />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StrictMode>
      <DataProvider>
        <RouterProvider router={PathRouter} />
      </DataProvider>
    </StrictMode>
  </StrictMode>
);
