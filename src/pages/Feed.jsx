import React, { useState } from "react";
import PostCard from "../components/PostCard";
import {
  useGetPostsQuery,
  useSendPostMutation,
} from "../redux/features/api/baseApi";

const Feed = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [sendPost, { data: postData }] = useSendPostMutation();
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   await createPost(newPost);
      //   setNewPost({ title: "", body: "" });

      sendPost(newPost);
      console.log(postData);
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="feed">
      <h1>Posts</h1>

      <form onSubmit={handleSubmit} className="create-post-form">
        <h2>Create New Post</h2>
        <input
          type="text"
          placeholder="Post Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Post Content"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          required
        />
        <button type="submit">Create Post</button>
      </form>

      <div className="posts-grid">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
