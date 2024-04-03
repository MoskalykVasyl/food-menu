import React from 'react'
import { useAuth } from '../hook/useAuth'
import { useNavigate } from 'react-router-dom';

const CreateNewPost = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();
  return (
   <>
    <div>CreateNewPost</div>
    <button onClick={()=>{signout(()=>{navigate('/', {replace:true})})}}>Log Out</button>
    </>
  )
}

export default CreateNewPost