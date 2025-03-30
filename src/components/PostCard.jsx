import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="post-card">
      <div className="post-card-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </div>
    </Link>
  );
};

export default PostCard;
