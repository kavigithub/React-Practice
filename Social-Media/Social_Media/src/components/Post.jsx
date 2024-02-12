import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

// eslint-disable-next-line react/prop-types
const Post = ({post}) => {
  const {deletePost} = useContext(PostListContext);
  return (
    <>
      <div className="card my-3 position-relative w-75">
        <div className="card-body">
          <h5 className="card-title">{post?.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post?.id)}>
            <MdDelete />
          </span>
          <p className="card-text">
            {post?.body}
          </p>
          {
            post?.tags.map((tag) => (
              <span key={tag} className="badge text-bg-primary mx-1 p-2">{tag}</span> 
            ))
          }

<div className="alert alert-success mt-3 mb-0" role="alert">
  <small>This post has : {post?.reactions}</small>
</div>
         
        </div>
      </div>
    </>
  );
};

export default Post;
