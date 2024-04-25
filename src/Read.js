import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
     const {id}=useParams();
 const [studentinfo,setstudentinfo]=useState([])
     useEffect(()=>{
         axios.get('http://localhost:8081/read/'+id)
         .then(res=>{console.log(res)
             setstudentinfo(res.data[0])
                 })
         .catch(err=>console.log(err));
     },[])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
    <h1 style={{textAlign:"center",color:"green"}}>Student info</h1>
    <div className='p-3'>
      <h2>Id:-{studentinfo.Id}</h2>
      <h2>Name:-{studentinfo.Name}</h2>
      <h2>RoolNo:-{studentinfo.RoolNo}</h2>
      </div>
      <Link to="/" className='btn btn-primary me-2'>Back</Link>
      <Link to={`/edit/${studentinfo.Id}`} className='btn btn-info'>Edit</Link>

    </div>
    </div>
  )
}

export default Read