import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateStudents() {
  const { id } = useParams();

  const navigate = useNavigate()

  const notifySuccess = () => {
    toast.success(" updated successfully ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  

  const notifyError = () => {
    toast.error("🦄 oops add fails!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  useEffect(() => {
    async function fetchdatabyId() {
      try {
        const res = await axios.get(
          "http://localhost:5036/api/StudentDetails/"+id
        );
        console.log(res.data);
        setName(res.data.name);
        setArea(res.data.area);
        setEmail(res.data.email);
        setCourse(res.data.course);
      } catch (error) {
        console.error(error);
      }
    }
    fetchdatabyId();
  }, []);

  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5036/api/StudentDetails/"+id, {
        name,
        area,
        email,
        course,
      });
      notifySuccess();
      navigate("/")
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };
  return (
    <div
      className="container  flex flex-col  justify-center items-center h-[100vh] w-[100%]"
      style={{ backgroundColor: "rgb(23, 23, 96)" }}
    >
      <h1 className="mb-4 text-4xl text-white">Update Students Details</h1>
      <form
        action=""
        className="p-9 w-[600px] flex"
        style={{ backgroundColor: "rgb(23, 133, 230)" }}
      >
        <div className=" flex-1 flex flex-col">
          <label htmlFor="" className="text-xl">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[250px] h-[50px] bg-gray-100 border border-none outline-none rounded-lg mt-4 mb-4 "
          />
          <label htmlFor="" className="text-xl">
            area
          </label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-[250px] h-[50px] bg-gray-100 border border-none outline-none rounded-lg mt-4  mb-4"
          />
          <label htmlFor="" className="text-xl">
            email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[250px] h-[50px] bg-gray-100 border border-none outline-none rounded-lg mt-4 mb-4"
          />
          <label htmlFor="" className="text-xl">
            course
          </label>
          <select
            name=""
            id=""
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-[250px] h-[50px] bg-gray-100 border border-none outline-none  rounded-lg mt-4 mb-4"
          >
            <option value="">courses</option>
            <option value="science">science</option>
            <option value="maths">maths</option>
            <option value="english">english</option>
            <option value="chemistry">chemistry</option>
          </select>
        </div>
        <div className="flex-2  flex flex-col justify-end items-center">
          <button
            className="bg-green-900 p-2 text-white rounded-xl h-[40px] w-[150px] mb-4 hover:bg-green-700"
            onClick={handleSubmit}
          >
            Update
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}

export default UpdateStudents;
