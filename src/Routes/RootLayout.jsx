import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../Components/Hero";

const Rootlayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,

      },
 
    ],
  },
]);

export default Rootlayout;