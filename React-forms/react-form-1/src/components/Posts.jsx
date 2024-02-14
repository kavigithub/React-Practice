const Posts = ({post}) => {
  return (
    <div className="post-card">
    <h2 className="post-title">{post.title}</h2>
    <p className="post-body">{post.body}</p>
        <div className="button">
        <div className="delete-btn">Delete</div>
        </div>
    </div>
  )
}

export default Posts