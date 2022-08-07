import React, {useState, useEffect} from "react";
import axios from 'axios';

import {Button} from 'react-bootstrap'

function HomeScreen({value}){
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        async function fetchPosts(){
            const {data} = await axios.get('http://127.0.0.1:8000/')
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return(
        <div>
            {posts.map(p => (<div key={p.id}>
                <h1>{p.post_title}</h1>
                <p>{p.post_body}</p> posted on - 
                <small>{p.post_date}</small>
            </div>))}
        </div>
    )
}

export default HomeScreen

