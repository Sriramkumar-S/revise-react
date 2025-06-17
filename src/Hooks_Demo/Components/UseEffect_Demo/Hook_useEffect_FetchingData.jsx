import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Hook_useEffect_FetchingData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idFromButton, setIdFromButton] = useState(1);
    useEffect(() => {
        axios.get(`${url}/${idFromButton}`)
            .then(response => {
                console.log(response);
                setPost(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButton])

    const handleFetchPost = () => {
        setIdFromButton(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={handleFetchPost}>Fetch post</button>
        <div>{post.title}</div>
      {/* <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default Hook_useEffect_FetchingData
