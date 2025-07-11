import React from 'react';
import './Marketing.css';

function Marketing() {
  return (
    <div className="marketing-container">
      <h2>📣 Social Media Marketing</h2>

      <section className="campaign-section">
        <h3>Create a New Campaign</h3>
        <form className="campaign-form">
          <input type="text" placeholder="Campaign Title" />
          <textarea placeholder="Write your post..." />
          <input type="text" placeholder="Hashtags (comma separated)" />
          <input type="datetime-local" />
          <button type="submit">Schedule Post</button>
        </form>
      </section>

      <section className="scheduled-campaigns">
        <h3>📅 Scheduled Campaigns</h3>
        <ul>
          <li>🔵 Product Launch - 12 July @ 10:00 AM</li>
          <li>🟣 Employee Spotlight - 15 July @ 2:30 PM</li>
        </ul>
      </section>
    </div>
  );
}

export default Marketing;
