// src/pages/Marketing.js
import React from "react";
import "./Marketing.css";

function Marketing() {
  const campaigns = [
    { id: 1, name: "Email Blast Q1", status: "Active", leads: 120 },
    { id: 2, name: "LinkedIn Ads", status: "Paused", leads: 85 },
    { id: 3, name: "Referral Campaign", status: "Active", leads: 60 },
  ];

  return (
    <div className="marketing-page">
      <h2>📢 Marketing Dashboard</h2>

      <div className="campaign-summary">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <h3>{campaign.name}</h3>
            <p>Status: <span className={`status ${campaign.status.toLowerCase()}`}>{campaign.status}</span></p>
            <p>Leads Generated: <strong>{campaign.leads}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketing;
