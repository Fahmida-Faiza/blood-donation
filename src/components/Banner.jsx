
import Card from "./Card"
// import CardDetails from "./CardDetails";



const Banner = () => {

  // const loaded = useLoaderData();



  return (
    <div>
      <div
        className="hero min-h-[600px] "
        style={{
          backgroundImage: "url(blood-donation.png)",
        }}>
      </div>
       
      {/* <div className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4'>      */}
      <div>
        {/* {
          // loaded.map(loadedData => <Card key={loaded.id} loadedData={loadedData}></Card>)

          

        } */}

        <Card/>
      </div>
    </div>
  )
}

export default Banner