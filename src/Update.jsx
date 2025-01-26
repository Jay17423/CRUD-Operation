import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [data,setData] = useState({
    name: '',
    email: '',
    phone: ''
  })
   const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`).
    then((res) => setData(res.data));
  },[id])
  const navigate = useNavigate()
  const handleUpadte = () =>{
    axios.put(`http://localhost:3000/user/${id}`,data).
    then((res) => console.log(res.data),
    navigate('/')
  )
  }
  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Update User</h2>
    <form onSubmit={handleUpadte}>
 
      <div class="mb-4">
        <label htmlFor="name" class="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          class="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={data.name} onChange={(e) =>{
            setData({...data,name:e.target.value})
          }}
        />
      </div>

      <div class="mb-4">
        <label htmlFor="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          class="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={data.email}  onChange={(e) =>{
            setData({...data,email:e.target.value})
          }}
        />
      </div>

      <div class="mb-4">
        <label htmlFor="phone" class="block text-gray-700 font-bold mb-2">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter Phone"
          class="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={data.phone}  onChange={(e) =>{
            setData({...data,phone:e.target.value})
          }}
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Update
      </button>
    </form>
  </div>
</div>
  )
}

export default Update