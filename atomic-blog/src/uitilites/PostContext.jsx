import { createContext, useContext, useState } from "react";
import { createRandomPost } from "./CreateRandomPost";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const providerValue = {
    posts: searchedPosts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    searchQuery,
    setSearchQuery,
  }
  return (
    <PostContext.Provider value={providerValue}>
      {children}
    </PostContext.Provider>
  );
};

function usePosts(){
    const context = useContext(PostContext);
    if(context === undefined){
        throw new Error('PostContext was used outside of the prost provider');
    }
    return context;
}

export { PostProvider, usePosts };
