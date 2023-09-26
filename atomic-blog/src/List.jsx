import React, { useContext } from 'react'
import { PostContext, usePosts } from './uitilites/PostContext';

const List = () => {
  //const {posts} = useContext(PostContext);
  const {posts} = usePosts();
     return (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      );
}

export default List