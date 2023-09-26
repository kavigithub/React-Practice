import { useEffect, useState, createContext } from "react";
import {createRandomPost} from './uitilites/CreateRandomPost';
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";
import { PostContext } from "./uitilites/PostContext";

//This is actually a component...create context create component
//1. Create Context
/* const PostContext = createContext();
 //2. Provide value to the child component
    //value is a pros
     <PostContext.Provider value={{
      posts: searchedPosts
    }}>
console.log(PostContext); 
 //3. consuming the context value
    const {onClearPosts} = useContext(PostContext);

    summary:
    creatig context : const PostContext = createContext();
    providing value  : <PostContext.Provider value={{posts: searchedPosts}}>
    reading :  const {onClearPosts} = useContext(PostContext);
*/


function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

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

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    //2. Provide value to the child component
    //value is a pros
    <PostContext.Provider value={{
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery
    }}>
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
    </PostContext.Provider>
  );
}
export default App;
