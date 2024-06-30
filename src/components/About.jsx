import cover from "../assets/cover.jpg"
const About = () => {
    return (
        <div>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={cover} className="w-72 lg:w-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold uppercase">Ethernal Beauty <br></br>for Everybody</h1>
                        <p className="py-6">Here you’ll discover just the best in breed, and we endeavor to offer something in each value range. NIOR is here to <br></br>elevate, enable and eventually assemble confidence in ladies around the globe through astounding items that empower both inward and external beauty. Every woman is particularly wonderful, and we might want to be an accomplice in her voyage to discover and improve it. We stand for a strong account in aesthetics that elevates all independent outflows. We recognize that there is no single definition of beauty.<br></br> Pick a matte lipstick that provides excellent coverage and transfer-proof color in one stroke.<br></br> The only thing you leave behind is your vibe, since the color stays with you the entire day!
                            <br></br>


                            A Tale of Enduring Influence on the Present and the Future</p>
                        {/* <button className="btn btn-outline btn-secondary">Shop Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;