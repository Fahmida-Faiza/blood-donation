
import Card from "./Card"
// import CardDetails from "./CardDetails";



const Banner = () => {

  // const loaded = useLoaderData();



  return (
    <div>
      <div
        className="hero min-h-[200px] mt-5 lg:mt-0 md:min-h-[500px] lg:min-h-[600px] "
        style={{
          backgroundImage: "url(blood-donation.png)",
        }}>
      </div>

      <Card />
    
    </div>

 
  )
}

export default Banner