import React, {useState, useEffect} from "react";
import axios from 'axios';

import {Button} from 'react-bootstrap'

function HomeScreen(){
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
            {posts.map(p => (
                <div key={p.id}>
                <h1>{p.title}</h1>
                <p>{p.excerpt}</p>
                <small>{p.published}</small> <a href={`/${p.id}`}>Read More</a>
            </div>))}
        </div>
    )
}

export default HomeScreen

