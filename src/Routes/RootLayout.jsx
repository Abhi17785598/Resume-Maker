import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home"; // Home includes Hero + HowItWorks

const Rootlayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "home", 
        element: <Home />, 
      },
    ],
  },
]);

export default Rootlayout;
