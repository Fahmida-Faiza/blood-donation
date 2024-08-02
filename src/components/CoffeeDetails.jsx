import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

  const coffee = useLoaderData();

  const [group, setGroup] = useState([]);

  // search
  const [search, setSearch] = useState("")

  // 

  useEffect(() => {
    fetch('http://localhost:5000/form')
      .then(res => res.json())
      .then(data => {

        // filter korsi blood (group r sathe title)
        const foundGroup = data.filter(aGroup=>aGroup.group === coffee.title);
        setGroup(foundGroup);
      }
    
    );
  }, [])

  console.log(group)


// search functionality

  const searchData = group.filter((aGroup) => 

    aGroup.location.toLowerCase().includes(search.toLowerCase())



)



// ////////////






  return (
    
    <div>
      {/* search er kaj */}
      <div className="">
        <label className="input input-bordered flex items-center gap-2">

          {/*  */}
          <input type="text" 
          
            value={search}
             onChange={(e)  => setSearch(e.target.value)}

            //  
          
          className="grow" placeholder="Search Location"
           />



           {/* saerch sesh */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>

      </div>


      {/* //////search end//////// */}
      <h3 className="text-3xl font-bold text-center my-5 text-white">BloodDetails</h3>

      {/* .............................................. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">


        {/* map korsi group key */}
        {
          // group.map(aGroup => <div key={aGroup.id} >



          // search
          searchData.map(aGroup => <div key={aGroup.id} >
           {/*  */}
                {
                  <div className="card bg-base-100 w-80 shadow-xl border-red-600 border-2 text-white">
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
                            <button className="btn btn-info">Go Back</button>
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