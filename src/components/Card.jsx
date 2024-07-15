import {  useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";
import { useState } from "react";

const Card = () => {
    // const { id, title, desc } = loadedData;
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees)
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {/* <div className="card bg-base-100 shadow-xl "> */}
                {/* <figure className="px-10 pt-10">
                    <img
                        src="./blood.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure> */}
                {/* <div className="card-body items-center text-center  border-2 border-red-600"> */}
                    {/* <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions">
                        <Link to={`/donner/${id}`} >
                            <button className="btn btn-primary">Find Donner for {title}</button>
                        </Link>
                    </div> */}


                    {
                        coffees.map(coffee => <CardDetails
                            key={coffee._id}
                            coffee={coffee}
                           
                            coffees={coffees}
                            setCoffees={setCoffees}

                        ></CardDetails>)
                    }
                </div>
            // </div>
        // </div>
    );
};

export default Card;