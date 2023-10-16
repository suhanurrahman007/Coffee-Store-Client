import { useLoaderData } from "react-router-dom";
import Coffees from "../components/Coffees";
import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider";

const Root = () => {
    const user = useContext(AuthContext)
    console.log(user);
    const loadCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadCoffees)
    console.log(coffees);
    return (
        <div className="grid grid-cols-2 gap-5 px-20 py-10">
            {
                coffees.map(coffee => <Coffees key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffees>)
            }
        </div>
    );
};

export default Root;