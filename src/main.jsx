import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPizza from "./pages/DetailPizza.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Contact from "./pages/Contact.jsx";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pizze/:pizzaID",
    element: <DetailPizza />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
