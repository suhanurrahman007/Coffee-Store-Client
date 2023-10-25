// import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Coffees from "../components/Coffees";
// import { useState } from "react";

const Root = () => {
    // const loadCoffees = useLoaderData()
    // const [coffees, setCoffees] = useState(loadCoffees)
    // console.log(coffees);
    const {data: coffees, isPending, isError, error} = useQuery({
        queryKey: ["coffees"],
        queryFn: async () => {
            const res = await fetch(
              "https://coffee-store-server-gd37n0gcu-suhans-projects.vercel.app/coffees"
            );
            return res.json()
        }
    })

    if (isPending) {
        return <span>Loading...........</span>
    }
    if (isError) {
        return <span className="text-red-600">{error.message}</span>
    }
    return (
        <div className="grid grid-cols-2 gap-5 px-20 py-10">
            {
                coffees.map(coffee => <Coffees key={coffee._id} coffees={coffees} coffee={coffee}></Coffees>)
            }
        </div>
    );
};

export default Root;