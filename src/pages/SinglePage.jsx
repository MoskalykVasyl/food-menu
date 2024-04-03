import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const SinglePage = ({to}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null)

    const goBack=()=>{navigate(-1)};

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])
  return (
    <>
    <button onClick={goBack}>Назад</button>
    <div>
        {post && (
            <>
            <h1>ID ={post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            </>
        )}
    </div>
    </>
  )
}

export {SinglePage};