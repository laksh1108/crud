import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button, ListGroup} from 'react-bootstrap';
import { useNavigate ,Link } from 'react-router-dom'



const Users = () => {
    const navigate=useNavigate()
    let [user,setUser]=useState([])
    const [searchQuery, setSearchQuery] = useState('');

    const deleteHandler=async(id)=>{
        try{
            await axios.delete(`http://localhost:5000/deleteUser/${id}`)
        }catch(err){
            console.log(err.message)
        }
    }
    const filterUsers = () => {
        return user.filter((u) => {
          const fullName = `${u.firstName} ${u.lastName}`.toLowerCase();
          const city = u.city.toLowerCase();
          const query = searchQuery.toLowerCase();
          return fullName.includes(query) || city.includes(query);
        });
      };

    useEffect(()=>{
      const fetchData = async () => {
        try{
         const res=await axios.get('http://localhost:5000/')
         setUser(res.data)
        }catch(err){
            console.log(err.message)
        }
      }
      fetchData();
    },[deleteHandler])

    const editHandler=async(id)=>{
        navigate(`/update/${id}`)
    }
    

  return (
   
    <div className='mt-2'>
    <div className="mb-3">
      <input
        type="text"
        className="form-control mx-3"
        placeholder="Search users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    <Button className="m-4">
      <Link to="/create" style={{ textDecoration: 'none', color: 'inherit' }}>
        Create a User
      </Link>
    </Button>
    {filterUsers().map((i) => (
      <ListGroup horizontal className="mx-3" key={i._id}>
        <ListGroup.Item action variant="success">
          {i.firstName}
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          {i.lastName}
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          {i.city}
        </ListGroup.Item>
        <ListGroup.Item action variant="success" className="d-flex justify-content-around">
          <Button variant="link" className="border-0" onClick={() => editHandler(i._id)}>
            🖊️
          </Button>
          <Button variant="link" className="border-0" onClick={() => deleteHandler(i._id)}>
            🚫
          </Button>
        </ListGroup.Item>
      </ListGroup>
    ))}
  </div>
);
};
  
export default Users