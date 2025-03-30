import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/features/api/baseApi";

const SinglePost = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useGetPostQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="single-post">
      <Link to="/" className="back-button">
        ← Back to Feed
      </Link>
      <article className="post-content">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    </div>
  );
};

export default SinglePost;
