import React, { useContext } from 'react'
import Posts from './Posts';
import FormAddPost from './FormAddPost';
import { PostContext, usePosts } from './uitilites/PostContext';

const Main = () => {
   // const { posts, onAddPost } = useContext(PostContext);
   const { posts, onAddPost } = usePosts();
    return (
        <main>
          <FormAddPost onAddPost={onAddPost} />
          <Posts posts={posts} />
        </main>
      );
}

export default Main