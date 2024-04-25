import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [stddata, setstddata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081")
      .then((res) => setstddata(res.data))
      .catch((err) => console.log(err));
  }, []);

const handeldelete=(id)=>{
    axios.delete('http://localhost:8081/delete/'+id)
    .then((res) =>{
      setstddata(stddata.filter(student => student.Id !== id));
    } )
    .catch((err) => console.log(err));

}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <h2>Student List</h2>
      <div className="d-flex justify-content-end">
        <Link to="/create" className="btn btn-success">Create +</Link>
      </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>RoolNo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stddata.map((item,index) => (
              <tr key={index}>
                <td>{item.Id}</td>
                <td>{item.Name}</td>
                <td>{item.RoolNo}</td>
                <td>
                  <Link to={`/read/${item.Id}`} className="btn btn-sm btn-info">Read</Link>
                  <Link to={`/edit/${item.Id}`} className="btn btn-sm btn-primary mx-2">Edit</Link>
                  <button onClick={()=>handeldelete(item.Id)} className="btn btn-sm btn-danger">Delete</button>


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
