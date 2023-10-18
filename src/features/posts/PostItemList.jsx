import { Link } from "react-router-dom";

const PostItemList = ({ id, title, body }) => {
  return (
    <li>
      <h4><Link to={`/posts/${id}`} style={{ color: "#000000" }}>{title}</Link></h4>
      <p>{body}</p>
    </li>
  )
}

export default PostItemList