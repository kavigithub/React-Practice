import React, { useContext } from 'react';
import Results from './Results';
import SearchPosts from './SearchPosts';
import { PostContext, usePosts } from './uitilites/PostContext';

const Header = () => {
   /*  const x = useContext(PostContext); 
    console.log(x, 'xxxxxxxxx');*/
    //3. consuming the context value
    //const {onClearPosts} = useContext(PostContext);
    const {onClearPosts} = usePosts();
    return (
        <header>
          <h1>
            <span>⚛️</span>The Atomic Blog
          </h1>
          <div>
            <Results />
            <SearchPosts />
            <button onClick={onClearPosts}>Clear posts</button>
          </div>
        </header>
      );
}

export default Header