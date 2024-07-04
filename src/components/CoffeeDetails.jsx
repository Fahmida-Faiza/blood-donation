import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

  const coffee = useLoaderData();
  const { title, desc, img } = coffee;
  return (
    <div>
        <h3 className="text-3xl font-bold text-center my-5">BloodDetails</h3>
      <div className="flex justify-center">

        {/* <div>
        <p><span className="font-bold"> id:</span> {_id}</p>
        <p><span className="font-bold"> title:</span> {title}</p>
        <p><span className="font-bold"> desc:</span> {desc}</p>
      </div> */}
        <div className="card card-compact bg-base-100 w-80 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <Link to="/">
                <button className="btn ml-4 lg:ml-0">Go Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails