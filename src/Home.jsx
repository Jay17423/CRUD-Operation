import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-amber-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">List of Users</h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <div className="flex justify-end ">
          <Link to={'/create'} className="bg-amber-600 rounded-xl">ADD+</Link>
        </div>
        <table className="table-auto w-full bg-white shadow-md rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.user.id} className="text-gray-700 hover:bg-gray-100">
                <td className="border px-4 py-2 text-center">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  <Link to={`/read/${user.id}`}  className="p-2 m-1 bg-blue-700 rounded-xl w-15 text-white">
                    View
                  </Link>
                  <button className="p-2 m-1 bg-red-700 rounded-xl w-15 text-white">
                    Delete
                  </button>
                  <Link to={`/update/${user.id}`} className="p-2 m-1 bg-green-700 rounded-xl w-15 text-white">
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;



// const handleDelete = (id) =>{
//   axios.delete(`http://localhost:3000/user/${id}`)
//   .then(res =>{
//     navigate('/')
//   })
// }

// onClick={e => handleDelete(user.id)}