import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import { useState } from "react";

const Card = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees)
    return (
        <div>
            <h3 className="my-10 text-3xl font-medium text-center">Blood Group</h3>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mt-4">
                    {
                        coffees.map(coffee => <CardDetails
                            key={coffee._id}
                            coffee={coffee}

                            coffees={coffees}
                            setCoffees={setCoffees}

                        ></CardDetails>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Card;