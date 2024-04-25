import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const {id}=useParams(); 

    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{console.log(res)
             setValues({...values,Name:res.data[0].Name,RoolNo:res.data[0].RoolNo})
                })
        .catch(err=>console.log(err));
    },[])

    const [values, setValues] = useState({
        Name: '',
        RoolNo: ''
    });

    const navigate=useNavigate();
    const handelupdate=(event)=>{
   event.preventDefault();
     axios.put('http://localhost:8081/update/'+id,values)
     .then(res=>{console.log(res)
          navigate('/');
    })
     .catch(err=>console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handelupdate}>
                    <h2>Update student</h2>
                    <div className='mb-2'>
                        <label htmlFor='Name'>Name</label>
                        <input
                            type='text'
                            placeholder='Enter name'
                            name="Name"
                            className='form-control'
                            onChange={e => setValues({ ...values, Name: e.target.value })}
                            value={values.Name}
                        />
                    </div>
                    <div>
                        <label htmlFor='RollNo'>RollNo</label>
                        <input
                            type='text'
                            placeholder='Enter roll number'
                            name='RoolNo'
                            className='form-control'
                            onChange={e => setValues({ ...values, RoolNo: e.target.value })}
                            value={values.RoolNo}

                        />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
  )
}

export default Update