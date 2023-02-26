import React from 'react'

 const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

  return (
    <ul className="list-group">
        {posts.map(post=> (
            <li key={post.id} className="list-group-item" style={{fontWeight: 'bold'}}>
                {post.title}
                <p style={{fontWeight:'normal'}}>{post.body}</p>
            </li>
        ))}
    </ul>
  )
}

export default Posts;
