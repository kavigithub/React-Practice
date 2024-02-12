import { useContext} from "react"
import Post from "./Post"
import {PostListContext} from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loader from "./Loader";

const PostList = () => {
  const {postListVar, fetchingData} = useContext(PostListContext);

  return (
    <div>
       {fetchingData && <Loader />}
       {!fetchingData && postListVar.length <= 0 && <WelcomeMsg />}
       {postListVar.map((item) => <Post key={item.id} post={item} />)}
    </div>
  )
}

export default PostList