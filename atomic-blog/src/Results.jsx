import React, { useContext } from 'react'
import { PostContext, usePosts } from './uitilites/PostContext';

const Results = () => {
    //const {posts} = useContext(PostContext);
    const {posts} = usePosts();
    return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results