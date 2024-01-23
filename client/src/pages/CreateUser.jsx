import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateUser = () => {
  const navigate=useNavigate()

  const [user,setUser]=useState({
    firstName:'',
    lastName:'',
    city:''
  })
   

  const changeHandler=(e)=>{
    e.preventDefault();
    setUser(prev=>({...prev,[e.target.name]:e.target.value}))

  }
  const formHandler=async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/createUser",user)
      console.log(res)
    }catch(err){
      console.log(err)
    }
    setUser({
      firstName: '',
      lastName: '',
      city: ''
    });
    navigate('/')
  }
  return (
  <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
    <div className="container border rounded p-4">
      <h1 className="text-center mb-4">User Info</h1>

      <form onSubmit={formHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">First Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your First Name" value={user.firstName} onChange={changeHandler} name='firstName'/>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your Last Name"  value={user.lastName} onChange={changeHandler} name='lastName'/>
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter your city"  value={user.city} onChange={changeHandler} name='city' />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  )
}

export default CreateUser