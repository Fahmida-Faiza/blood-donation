import {  useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import { useState } from "react";

const Card = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees)
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 mt-20">
      
                    {
                        coffees.map(coffee => <CardDetails
                            key={coffee._id}
                            coffee={coffee}
                           
                            coffees={coffees}
                            setCoffees={setCoffees}

                        ></CardDetails>)
                    }
                </div>
    
    );
};

export default Card;