

import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useCart from "../hooks/useCart";




const Form = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    // 
    const [, refetch] = useCart()
    // 

    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const group = form.group.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const img = form.img.value;
       
       
       
        console.log(name, email,group,phone, location, img)

        ///////////////////////
        // database called
        const formItem = { name, email, group, phone, location, img };
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
                <div className=" bg-red-200 text-center my-12">
                    <h3 className="font-medium text-3xl uppercase  py-5 "> Form Fill-Up Page</h3>
                    <div className="flex justify-center">
                        <div className="w-3/4 lg:w-2/3 ">

                            <div className="grid grid-cols-2 justify-center gap-5">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Full Name</span>
                                    </div>
                                    <input type="text"
                                        name="name"
                                        // defaultValue={user?.displayName}
                                        required
                                        placeholder="Full Name"
                                        className="input input-bordered w-full" />
                                </label>

                              
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input type="email"
                                        name="email"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Enter your Email"
                                        className="input input-bordered w-full" />
                                </label>
                              
                              
                             
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Blood Group</span>
                                    </div>
                                    <input type="text"
                                        name="group"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Blood group "
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Mobile Number</span>
                                    </div>
                                    <input type="number"
                                        name="phone"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Location</span>
                                    </div>
                                    <input type="text"
                                        name="location"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="location"
                                        className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Image</span>
                                    </div>
                                    <input type="text"
                                        name="img"
                                        // defaultValue={user.email}
                                        required
                                        placeholder="Your Image"
                                        className="input input-bordered w-full" />
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