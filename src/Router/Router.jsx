import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("http://localhost:5000/coffees"),
  },

  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) =>
      fetch(`http://localhost:5000/coffees/${params.id}`),
  },
]);


export default router;