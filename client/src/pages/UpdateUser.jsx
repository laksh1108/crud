import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const UpdateUser = () => {
    const {id}=useParams()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        city: '',
    });
    const navigate=useNavigate()
   
    useEffect(()=>{
        const fetchData = async () => {
          try{
           const res=await axios.get('http://localhost:5000/'+id)
           setUser(res.data)
           
          }catch(err){
              console.log(err.message)
          }
        }
        fetchData();
        
      },[id])

    const editHandler=async(e)=>{
        e.preventDefault()
        try{
        await axios.put(`http://localhost:5000/updateUser/${id}`,user)
        }catch(err){
            console.log(err)
        }
    
        navigate('/')
       
    }

    const changeHandler=(e)=>{
        setUser(prev=>({...prev,[e.target.name]:e.target.value}))
        
    }
    
  return (
   <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
    <div className="container border rounded p-4">
      <h1 className="text-center mb-4">updating...</h1>

      <form onSubmit={editHandler}>
        <div className="mb-3">
          
          <input type="text" className="form-control" id="name" placeholder="Enter your First Name"  value={user.firstName}  onChange={changeHandler} name="firstName" required/>
        </div>
        <div className="mb-3">
          
          <input type="text" className="form-control" id="name" placeholder="Enter your Last Name"  value={user.lastName}  onChange={changeHandler} name="lastName" required/>
        </div>

        <div className="mb-3">
          
          <input type="text" className="form-control" id="city" placeholder="Enter your city"  value={user.city}  onChange={changeHandler} name="city" required/>
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser