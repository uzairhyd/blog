import React, {useState, useEffect} from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';

import axios from 'axios';


function DetailsScreen() {
    const [post, setPost] = useState([])
    const params = useParams();
    useEffect(() =>{
        async function fetchPost(){
            const {data} = await axios.get(`http://127.0.0.1:8000/${params.id}`)
            setPost(data)
            console.log(data)
        }
        fetchPost()
    }, [])
    
  return (
    
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default DetailsScreen;
