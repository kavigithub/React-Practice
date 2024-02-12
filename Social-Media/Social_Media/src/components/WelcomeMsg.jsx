// import { useContext } from "react";
// import { PostListContext} from "../store/post-list-store";

// const postURL = 'https://dummyjson.com/posts';

const WelcomeMsg = () => {
  /* const {addInitialPosts} = useContext(PostListContext); 
  const getFetchData = async() => {
    try {
        let apiRequest = await fetch(postURL);
        if(!apiRequest.ok) throw new Error('Network request failed!');
        let data = await apiRequest.json();
        addInitialPosts(data.posts)
    } catch (error) {
        console.log(error)
    }
} */

  return (
    <div>
          <h1>Welcome to the Blog!</h1>
          <p>
            This is a simple blog application built using React.js and Redux.
          </p>
          {/* <button className="btn btn-warning" onClick={getFetchData}>Fetch Posts</button> */}
    </div>
  );
};

export default WelcomeMsg;
