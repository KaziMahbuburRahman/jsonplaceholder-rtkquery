import React from "react";
import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div className="feed">
      <h1>Posts</h1>
      <div className="posts-grid">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
