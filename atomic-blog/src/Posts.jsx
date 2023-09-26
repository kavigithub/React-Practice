import React, { useContext } from 'react'
import List from './List';
import { PostContext, usePosts } from './uitilites/PostContext';

const Posts = () => {
    //const {posts} = useContext(PostContext);
    const {posts} = usePosts();
    return (
        <section>
          <List posts={posts} />
        </section>
      );
}

export default Posts