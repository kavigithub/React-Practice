import { useEffect, useState, createContext } from "react";
import {createRandomPost} from './uitilites/CreateRandomPost';
import Header from "./Header";
import Main from "./Main";
import Archive from "./Archive";
import Footer from "./Footer";
import { usePosts, PostProvider } from "./uitilites/PostContext";

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
  const [isFakeDark, setIsFakeDark] = useState(false);

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
   
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <PostProvider>
          <Header />
          <Main />
          <Archive />
          <Footer />
        </PostProvider>
      </section>
    
  );
}
export default App;
