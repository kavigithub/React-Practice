import React, { useContext } from 'react'
import { PostContext, usePosts } from './uitilites/PostContext';

const SearchPosts = () => {
    // const { searchQuery, setSearchQuery} = useContext(PostContext);
    const { searchQuery, setSearchQuery} = usePosts();
     return (
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search posts..."
        />
      );
}

export default SearchPosts