

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useCart from "../hooks/useCart";




const Form = () => {

    const { user, loading } = useContext(AuthContext);
    console.log(user)
    // 
    const [, refetch] = useCart()
    //////////////district

    const [districts, setDistricts] = useState("");
    

    useEffect(() => {
        fetch('../districs.json')
            .then(res => res.json())
            .then(data => setDistricts(data));
}, [])
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>
    }

// console.log(group)



// 

const handleform = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const group = form.group.value;
    const phone = form.phone.value;
    const division = form.division.value;
    const district = form.district.value;
    const img = form.img.value;



    console.log(name, email, group, phone, division, district, img)

    ///////////////////////
    // database called
    const formItem = { name, email, group, phone, division, district, img };
    //  /////////vercel add korar agey
    // axios.post('http://localhost:5000/form', formItem)
    /////////
    axios.post('http://localhost:5000/form', formItem)

        .then(res => {
            console.log(res.data)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Message Send Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                // refetch cart to update the cart items count
                refetch();
            }

        })
}



return (
    <>
        <form onSubmit={handleform} >
            <div className=" text-center my-12 text-white">
                <h3 className="font-medium text-3xl uppercase  py-5 "> Form Fill-Up Page</h3>
                <div className="flex justify-center">
                    <div className="w-3/4 lg:w-2/3 ">

                        <div className="grid grid-cols-2 justify-center gap-5 text-white">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Full Name</span>
                                </div>
                                <input type="text"
                                    name="name"
                                    // defaultValue={user?.displayName}
                                    required
                                    placeholder="Full Name"
                                    className="input input-bordered w-full " />
                            </label>


                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Email</span>
                                </div>
                                <input type="email"
                                    name="email"
                                    // defaultValue={user.email}
                                    required
                                    placeholder="Enter your Email"
                                    className="input input-bordered w-full " />
                            </label>



                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Blood Group</span>
                                </div>

                                {/* .................................. */}
                                <select name="group" className="select select-bordered w-full text-gray-400">
                                    <option disabled selected>Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                                {/* .................................. */}


                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Mobile Number</span>
                                </div>
                                <input type="text"
                                    name="phone"
                                    // defaultValue={user.email}
                                    required
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full " />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Division</span>
                                </div>

                                {/* //////////////////////////////////////////////// */}
                                {/* .................................. */}
                                <select name="division" className="select select-bordered w-full text-gray-400">
                                    <option disabled selected>Division</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value=" Mymensingh"> Mymensingh</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                                {/* .................................. */}




                            </label>

                            {/* ////////////////////// district */}

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">District</span>
                                </div>

                                <select name="district" className="select select-bordered w-full text-gray-400">
                                    <option disabled selected>District</option>
                                    {
                                        districts.map(district =>
                                            <option key={district.id} value={district.name}>{district.name}</option>

                                        )
                                    }
                                </select>







                            </label>




                            {/* ///////////////////////////////// */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-white">Image</span>
                                </div>
                                <input type="text"
                                    name="img"
                                    // defaultValue={user.email}
                                    required
                                    placeholder="Your Image"
                                    className="input input-bordered w-full " />
                            </label>


                        </div>



                    </div>
                </div>
                <button className="btn btn-success text-white w-2/3 my-5">Submit</button>
            </div>
        </form>
    </>
);
};

export default Form;