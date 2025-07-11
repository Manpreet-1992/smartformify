// src/pages/Marketing.js
import React, { useState } from "react";
import "./Marketing.css";

function Marketing() {
  const [platform, setPlatform] = useState("LinkedIn");
  const [message, setMessage] = useState("");
  const [schedule, setSchedule] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      platform,
      message,
      schedule,
    };
    setPosts([...posts, newPost]);
    setMessage("");
    setSchedule("");
  };

  return (
    <div className="marketing-container">
      <h2>📢 Social Media Marketing</h2>
      <form onSubmit={handleSubmit} className="marketing-form">
        <label>Platform</label>
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
        </select>

        <label>Post Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Write your post here..."
        />

        <label>Schedule Time</label>
        <input
          type="datetime-local"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          required
        />

        <button type="submit">📅 Schedule Post</button>
      </form>

      <div className="scheduled-posts">
        <h3>🗓️ Scheduled Posts</h3>
        {posts.length === 0 ? (
          <p>No posts scheduled yet.</p>
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <strong>{post.platform}</strong> — {post.message} <br />
                <small>Scheduled for: {post.schedule}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Marketing;
