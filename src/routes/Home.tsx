import { useState, useEffect } from "react"
import blogFetch from "../axios/config"

import { Link } from "react-router-dom"

import "./Home.css"

interface Post{
    id:string
    title: string
    body: string
    userId: string
}

export default function Home(){
    const [posts, setPosts] = useState<Post[]>([])

    const getPosts = async()=>{
        try {
            const response = await blogFetch.get('/posts')

            const data = response.data
           
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPosts()
    }, [])

    return(
        <div className="home">
            <h1>Ultimos posts:</h1>
            {posts.length === 0 ? <p>Carregando...</p> : (
                posts.map((post)=> (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
                    </div>
                ))
            ) }
        </div>
    )
}