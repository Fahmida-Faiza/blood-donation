import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

  const coffee = useLoaderData();

  const [group, setGroup] = useState([]);

  useEffect(() => {
    fetch('../db.json')
      .then(res => res.json())
      .then(data => {

        // filter korsi blood (group r sathe title)
        const foundGroup = data.filter(aGroup=>aGroup.group === coffee.title);
        setGroup(foundGroup);
      }
    
    );
  }, [])

  console.log(group)

  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-5">BloodDetails</h3>

      {/* .............................................. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {/* map korsi group key */}
        {
          group.map(aGroup => <div key={aGroup.id} >
           
                {
                  <div className="card bg-base-100 w-80 shadow-xl border-red-600 border-2">
                      <figure>
                        <img
                          src={aGroup.img}
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{aGroup.name}</h2>
                        <p>{aGroup.phone}</p>
                        <p>{aGroup.location}</p>
                        <div className="card-actions justify-end">
                          <Link to="/">
                            <button className="btn">Go Back</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
            }


          </div>)
        }
      </div>
    </div>
  )
}

export default CoffeeDetails