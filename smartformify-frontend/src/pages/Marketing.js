import React, { useState } from "react";
import "./Marketing.css";

function Marketing() {
  const [posts, setPosts] = useState([
    { id: 1, platform: "LinkedIn", content: "Launching SmartFormify soon!", date: "2025-07-11" },
    { id: 2, platform: "Twitter", content: "Follow us for updates! #SmartFormify", date: "2025-07-10" },
  ]);

  const [newPost, setNewPost] = useState({ platform: "LinkedIn", content: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPost = () => {
    if (newPost.content.trim() === "") return;
    const postToAdd = {
      id: posts.length + 1,
      platform: newPost.platform,
      content: newPost.content,
      date: new Date().toISOString().slice(0, 10),
    };
    setPosts([postToAdd, ...posts]);
    setNewPost({ platform: "LinkedIn", content: "" });
  };

  return (
    <div className="marketing-container">
      <h2>📢 Marketing Campaigns</h2>

      <div className="new-post-form">
        <select name="platform" value={newPost.platform} onChange={handleInputChange}>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
        </select>
        <textarea
          name="content"
          value={newPost.content}
          placeholder="Write your post content here..."
          onChange={handleInputChange}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      <div className="posts-list">
        {posts.length === 0 ? (
          <p>No posts scheduled yet.</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <strong>{post.platform}</strong> <span>{post.date}</span>
              </div>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Marketing;
