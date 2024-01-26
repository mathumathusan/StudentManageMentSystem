import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {


 const [data,setData]=useState([])
 
 useEffect(()=>{
   async function fetchAlldatas(){
                      try {
                         const res =   await axios.get("http://localhost:5036/api/StudentDetails")
                         console.log(res.data)
                         setData(res.data)
                      } catch (error) {
                        console.error(error)
                      }
              }

              fetchAlldatas()
 },[])

  const   handleDelete=async (id)=>{
             try {
              console.log(id)
              const res =  await axios.delete("http://localhost:5036/api/StudentDetails?id="+id)
              window.location.reload();
              
             } catch (error) {
              console.error(error)
             }
 }
  return (
    <div className="container ">
      <div className="h-[100vh] flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-bold mb-4"> Students Details</h1>
      <table className=" border border-gray-300 w-[75%] ">
        <thead className="bg-blue-200">
          <tr >
            <th className="border p-2 text-center">name</th>
            <th className="border p-2 text-center">email</th>
            <th className="border p-2 text-center">area</th>
            <th className="border p-2 text-center">course</th>
            <th className="border p-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200" >
            <td className="border p-2 text-center">mathusan</td>
            <td className="border p-2 text-center">mathusan825@gmail.com</td>
            <td className="border p-2 text-center">jaffna</td>
            <td className="border p-2 text-center">science,english</td>
            <td className="border p-2 text-center flex justify-around gap-4"> <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " >delete</button></td>
          </tr>
          <tr className="hover:bg-gray-200" >
            <td className="border p-2 text-center">mathusan</td>
            <td className="border p-2 text-center">mathusan825@gmail.com</td>
            <td className="border p-2 text-center">jaffna</td>
            <td className="border p-2 text-center">science,english</td>
            <td className="border p-2 text-center flex justify-around gap-4"> <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " >delete</button></td>
          </tr>
          <tr className="hover:bg-gray-200" >
            <td className="border p-2 text-center">mathusan</td>
            <td className="border p-2 text-center">mathusan825@gmail.com</td>
            <td className="border p-2 text-center">jaffna</td>
            <td className="border p-2 text-center">science,english</td>
            <td className="border p-2 text-center flex justify-around gap-4"> <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " >delete</button></td>
          </tr>
          <tr className="hover:bg-gray-200" >
            <td className="border p-2 text-center">mathusan</td>
            <td className="border p-2 text-center">mathusan825@gmail.com</td>
            <td className="border p-2 text-center">jaffna</td>
            <td className="border p-2 text-center">science,english</td>
            <td className="border p-2 text-center flex justify-around gap-4"> <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " >delete</button></td>
          </tr>
          <tr className="hover:bg-gray-200" >
            <td className="border p-2 text-center">mathusan</td>
            <td className="border p-2 text-center">mathusan825@gmail.com</td>
            <td className="border p-2 text-center">jaffna</td>
            <td className="border p-2 text-center">science,english</td>
            <td className="border p-2 text-center flex justify-around gap-4"> <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " >delete</button></td>
          </tr>
          {data.map((item,index)=>{
            return(
              <tr className="hover:bg-gray-200" key={item.id} >
            <td className="border p-2 text-center">{item.name}</td>
            <td className="border p-2 text-center">{item.email}</td>
            <td className="border p-2 text-center">{item.area}</td>
            <td className="border p-2 text-center">{item.course}</td>
            <td className="border p-2 text-center flex justify-around gap-4"> 
            <Link to={`/update/${item.id}`}>
            <button className="bg-green-700 border w-[80px] cursor-pointer rounded-md p-1 text-white hover:bg-green-500 ">edit</button>
            </Link>
            <button className="bg-red-700 w-[80px] rounded-md p-1 text-white hover:bg-red-500 " onClick={()=>handleDelete(item.id)} >delete</button></td>
          </tr>
            )
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Home;
