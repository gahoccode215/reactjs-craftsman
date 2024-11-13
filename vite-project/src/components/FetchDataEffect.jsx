import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            setPost(data);
        }
        fetchData()
    }, [])
  return (
    <div>
        <h1>First Post Title: </h1>
        {post.length > 0 ? <h2>{post[0].title}</h2> : <p>Loading...</p>}
    </div>
  )
}

export default FetchDataEffect