import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Posts from "./components/Posts";
import Form from "./components/Form";
let url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    let fetchPostDataFunc = async() => {
      try{
       /*  let response = await fetch(url);
        if(!response.ok) throw new Error ('Http Error :' + response.statusText);
        let data = await response.json(); 
        setPostData(data)
        */
       //Get Reuest
        fetch(url).then((resp) => resp.json()).then((data) => {
          console.log(data);
          setPostData(data);
        });
      } catch(error){
        console.log(error.message);
      }
    }
    fetchPostDataFunc();
  }, [])

  return (
    <div className="container">
      <h1>React Fetch Data</h1>
      <Form setPostData={setPostData} postData={postData}></Form>
      {postData.map((post) => (
        <Posts key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default App
