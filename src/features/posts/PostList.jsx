import PostItemList from "./PostItemList";

const PostList = ({ posts }) => {
  return (
    <div>
        <ul style={{ listStyleType: "none" }}>
          {posts.map((post) => (
            <PostItemList
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </ul>
    </div>
  )
}

export default PostList