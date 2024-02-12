import { useContext, useRef } from "react"
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const {addPost} = useContext(PostListContext);
 //useNavigate: hook used to navigate dynamically/programtically
  const navigate = useNavigate(); 
  
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postCommentElement = useRef();
  const numOfReactionElement = useRef();
  const hashtagElement = useRef();

  const createPostForm = (e) => {
    e.preventDefault();
    let newPost = {
      userId: userIdElement.current.value,
      title: postTitleElement.current.value,
      body: postCommentElement.current.value,
      reactions: parseInt(numOfReactionElement.current.value),
      hashtags: hashtagElement.current.value.split(' ')
    }
    addPost(newPost);
    navigate('/');    

    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postCommentElement.current.value = '';
    numOfReactionElement.current.value = parseInt(0);
    hashtagElement.current.value = ''
  }

  return (
    <form className="my-4" onSubmit={createPostForm}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId"/>
  </div>
  <div className="mb-3">
    <label htmlFor="postTitle" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="postTitle" ref={postTitleElement}/>
  </div>
  <div className="mb-3">
    <label htmlFor="postComment" className="form-label">Post Comment</label>
    <textarea height={50} type="text" className="form-control" id="postComment" ref={postCommentElement}/>
  </div>
  <div className="mb-3">
    <label htmlFor="numOfReaction" className="form-label">Reaction Numbers</label>
    <input type="number" className="form-control" id="numOfReaction" ref={numOfReactionElement}/>
  </div>
  <div className="mb-3">
    <label htmlFor="hashtag" className="form-label">Enter Your hastag here</label>
    <input type="text" className="form-control" id="hashtag" ref={hashtagElement}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Want to Post</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default CreatePost