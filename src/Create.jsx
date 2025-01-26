import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Create = () => {
  const [userData,setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const navigate = useNavigate();
  const handleData = (event) =>{
    event.preventDefault();
    axios.post("http://localhost:3000/user",userData)
    .then(res =>{
      console.log(res);
      navigate('/')
      
    })
  }

  
  return (
<div className="flex w-full min-h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 border bg-white shadow px-5 pt-3 pb-5 rounded-lg">
        <h1 className="text-2xl font-bold mb-5 text-gray-800">Add a User</h1>
        <form onSubmit={handleData}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>{
                setUserData({...userData, name: e.target.value})
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>{
                setUserData({...userData, email: e.target.value})
              }}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone"
              className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) =>{
                setUserData({...userData, phone: e.target.value})
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"

          >
            Submit
          </button>
          <Link
            to="/"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ml-3 hover:bg-blue-600 transition duration-200"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Create