import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import SignUp from "../components/SignUp";
import Users from "../components/Users";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("https://coffee-store-server-gd37n0gcu-suhans-projects.vercel.app/coffees"),
  },

  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },

  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-gd37n0gcu-suhans-projects.vercel.app/coffees/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-gd37n0gcu-suhans-projects.vercel.app/users"),
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);


export default router;