import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home"; // Home includes Hero + HowItWorks

import Hero from "../Components/Hero";
import ResumeTemplates from "../Pages/ResumeTemplates";
import CareerGuides from "../Pages/CareerGuides";
import GuideDetails from "../Pages/GuideDetails";

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
      {
        path:"Templates",
        element:<ResumeTemplates/>
      },
      {
        path:"career-guides",
        element:<CareerGuides/>
      },
      {
        path:"career-guides/:id",
        element:<GuideDetails/>
      }
    ],
  },
]);

export default Rootlayout;
