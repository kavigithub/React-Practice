/* eslint-disable react/prop-types */
import { createContext, useReducer,useState, useEffect } from "react";

const postURL = 'https://dummyjson.com/posts';

//API Design ...Contract Design
export const PostListContext = createContext({
    //this is structure...actual method pass in PostListProvider Context
    postListVar: [],
    addPost: () => {},
    deletePost: () => {},
    fetchingData:[]
});

/* const defaultPost = [
    {
        id: crypto.randomUUID(),
        title: `New Post ${Math.floor(Math.random() * 100)}`,
        body: `This is the content of Post number ${Math.floor(Math.random() * 100)}.`,
        reactions: 2,
        userId: '',
        tags: ['vacation', 'enjoying', 'Mumbai']
    },
    {
        id: crypto.randomUUID(),
        title: `Going Dubai`,
        body: `enjoying my trip`,
        reactions: 90,
        userId: '',
        tags: ['vacation', 'winter', 'Dubai']
      }
] */

const reducerFun = (currentState, action) => {
    switch(action.type){
        case 'Post_Add':
            return [action.payload, ...currentState];
        case 'Post_delete':
            return currentState.filter((item) => item.id !== action.payload.id);
        case 'Initial_Posts':
            //console.log(action.payload.fetchPosts, currentState, 'reducerfunc');
            return action.payload.fetchPosts    
        default:
            return currentState;
    }
}

const PostListProvider = ({ children }) => {
  const [postListVar, dispatchPostList] = useReducer(reducerFun, []);  
  const [fetchingData, setFetchingData] = useState(false); 
 
    const addPost = (addPostData) => {
        //console.log(addPostData);
        // Add a new post to the list.
        dispatchPostList({
            type: "Post_Add",
            payload: {
                id: crypto.randomUUID(),
                title: addPostData.title,
                body: addPostData.body,
                reactions: addPostData.reactions,
                userId: addPostData.id,
                tags: addPostData.hashtags
            }
        })
    }

    const deletePost = (deletePostId) => {
        dispatchPostList({
            type: "Post_delete",
            payload: {
                id: deletePostId
            }
        })
    }

    const addInitialPosts = (fetchPosts) => {
        //console.log(fetchPosts, 'dispatch')
        dispatchPostList({
            type: "Initial_Posts",
            payload: {
                fetchPosts
            }
        })
    }
  //initial data  
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    const getFetchData = async() => {
      try {
        setFetchingData(true)
          let apiRequest = await fetch(postURL, {
            method: 'GET',
            headers:{
              'Content-Type': 'application/json'
              },
              signal: signal //// Assign the AbortController signal to the fetch call
          });
          //if there is no header
          //await fetch(postURL, {signal}});
          if(!apiRequest.ok) throw new Error('Network request failed!');
          let data = await apiRequest.json();
          addInitialPosts(data.posts);
          setFetchingData(false)
          
      } catch (error) {
          console.log(error)
      }
    }
    getFetchData();

    return () => {
      // Abort the fetch operation when the component unmounts (when you going to another page)
      abortController.abort();
      console.log('this we called Cleanup function');
    }
  }, []);

   //value shows in {} and another {} is to show object 
  return <PostListContext.Provider value={{
    postListVar,
    addPost,
    deletePost,
    fetchingData
  }}>{children}</PostListContext.Provider>;
};

export default PostListProvider;
