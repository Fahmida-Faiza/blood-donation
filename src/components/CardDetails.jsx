
import { Link } from "react-router-dom";

const CardDetails = ({ coffees, setCoffees, coffee }) => {

    // const [group, setGroup] = useState([]);
    const { _id, title, desc, img } = coffee;


    // useEffect(() => {
    //     const urlId = Number(window.location.pathname.split('/')[2]); // Extract ID from URL
    //     // console.log(urlId)

    //     fetch('../group.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const foundBlog = data.find(item => item.id === urlId);
    //             setGroup(foundBlog);
    //             console.log(foundBlog)
    //         });
    // }, []); // Run once on initial render


    return (
        <div>
            {/* <h1>{group.id}</h1>
           <h3>{group.title}</h3>
           <p>{group.desc}</p> */}
            <div className="card bg-base-100 w-72 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{desc}</p>
                    <div className="card-actions">
                        <Link to={`coffee/${_id}`}>
                            <button className="btn ml-4 lg:ml-0">View</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div>
                <p><span className="font-bold"> id:</span> {_id}</p>
                <p><span className="font-bold"> title:</span> {title}</p>
                <p><span className="font-bold"> desc:</span> {desc}</p>
            </div> */}
            {/* <div>
                <Link to={`coffee/${_id}`}>
                    <button className="btn ml-4 lg:ml-0">View</button>
                </Link>
            </div> */}
        </div>
    );
};

export default CardDetails;