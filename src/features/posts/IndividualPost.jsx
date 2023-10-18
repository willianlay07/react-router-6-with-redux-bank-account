import { useLoaderData } from "react-router-dom"
import { fetchEachPost } from "../../services/apiPost"

const IndividualPost = () => {
    const post  = useLoaderData();
    
  return (
    <div>
        <h3>IndividualPost: {post.id}</h3>
        <h5>Title: {post.title}</h5>
        <p>Body: {post.body}</p>
    </div>
    
  )
}

export default IndividualPost

export async function loader({ params }) {
    const post  = await fetchEachPost(params.id);
    return post;
}