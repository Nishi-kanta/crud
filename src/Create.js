import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [values, setValues] = useState({
        Name: '',
        RoolNo: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add student</h2>
                    <div className='mb-2'>
                        <label htmlFor='Name'>Name</label>
                        <input
                            type='text'
                            placeholder='Enter name'
                            name="Name"
                            className='form-control'
                            onChange={e => setValues({ ...values, Name: e.target.value })}
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
                        />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
