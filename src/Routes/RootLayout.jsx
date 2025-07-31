import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from "../Components/Hero";
import Templates from '../Components/templates';

const Rootlayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,

      },
        { path: 'templates', element: <Templates /> },
 
    ],
  },
]);

export default Rootlayout;