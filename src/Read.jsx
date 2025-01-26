import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const [userData,setuserData] = useState({
    name:"",
    email:"",
    phone:""
  })
  const {id} = useParams();

  useEffect(() =>{
    axios.get(`http://localhost:3000/user/${id}`)
    .then((res) =>{
      setuserData(res.data)
    })
  },[id])
console.log(userData);

  
  
  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">User Details</h2>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <span class="font-bold text-gray-700">Name:</span>
          <span class="text-gray-600">{userData.name}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="font-bold text-gray-700">Email:</span>
          <span class="text-gray-600">{userData.email}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="font-bold text-gray-700">Phone:</span>
          <span class="text-gray-600">{userData.phone}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Read