import { useLoaderData } from "react-router-dom"

import { fetchAllPost } from "../../services/apiPost"
import PostList from "./PostList";

const Posts = () => {
  const posts   = useLoaderData();

  return (
    <div>
        <h1>Posts</h1>
        <PostList posts={posts} />
    </div>
  )
}

export default Posts

export async function loader() {
  const post  = await fetchAllPost();
  return post;
}