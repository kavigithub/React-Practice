import { useState } from "react"

const Form = ({setPostData, postData}) => {
  const [title, setTitle] = useState(''); 
  const [postBody, setPostBody] = useState('');

    async function addPosts(title, postBody){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: postBody,
                userId: Math.random().toString(36).slice(2)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Could not create Post");
    
        let data = await response.json();
        setPostData((currentPost) => [...currentPost, data]);
        console.log(postData, 'postData');
        setTitle('');
        setPostBody('');
      }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, postBody)
  }
 
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="form-control" id="" cols="10" rows="8" value={postBody} onChange={(e) => setPostBody(e.target.value)}/>
        <button type="submit">submit</button>
    </form>
  )
}

export default Form