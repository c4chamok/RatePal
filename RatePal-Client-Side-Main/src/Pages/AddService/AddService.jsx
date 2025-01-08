import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { label } from "motion/react-client";

const AddService = () => {
  const { user } = useContext(AuthContext);
  let [categories, setCategories] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);

  document.title = `RatePal || Add Service`;

  useEffect(() => {
    axios.get('https://rate-pal-server.vercel.app/getcategories')
      .then(res => {
        setCategories(() => res.data.categories.map((category) => {
          return { value: category, label: category.toUpperCase() }
        }))
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const service = {
      image: form.image.value,
      title: form.title.value,
      companyName: form.companyName.value,
      website: form.website.value,
      description: form.description.value,
      category: selectedOption.value,
      price: form.price.value,
      addedDate: new Date(),
      vendorEmail: user.email,
      rating: { averageRating: 0, reviewedBy: 0 },
    };
    axios
      .post("https://rate-pal-server.vercel.app/services", service, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Service has been added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      })
      .catch((err) => {
        if(err.response.status === 401 || err.response.status === 403){
          return logout()
      }
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-[95%] md:w-[65%]">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Service</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="">
            <label className="block text-gray-700">Service Image:</label>
            <input
              type="text"
              name="image"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="">
            <label className="block text-gray-700">Service Title:</label>
            <input
              type="text"
              name="title"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="">
            <label className="block text-gray-700">Company Name:</label>
            <input
              type="text"
              name="companyName"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="">
            <label className="block text-gray-700">Website:</label>
            <input
              type="text"
              name="website"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="">
            <label className="block text-gray-700">Category:</label>
            <CreatableSelect
              isClearable
              onChange={(value) => setSelectedOption(value)}
              options={categories} />
          </div>
          <div className="">
            <label className="block text-gray-700">Price:</label>
            <input
              type="text"
              name="price"
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              className="mt-1 p-2 w-full border rounded"
            ></textarea>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
