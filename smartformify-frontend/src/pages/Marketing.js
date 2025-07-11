import React, { useState } from "react";
import "./Marketing.css";

function Marketing() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "LinkedIn Launch", status: "Active" },
    { id: 2, name: "Twitter Promo", status: "Paused" },
  ]);
  const [newCampaignName, setNewCampaignName] = useState("");
  const [newCampaignStatus, setNewCampaignStatus] = useState("Active");

  const addCampaign = () => {
    if (!newCampaignName.trim()) return alert("Enter campaign name");
    setCampaigns([
      ...campaigns,
      { id: Date.now(), name: newCampaignName, status: newCampaignStatus },
    ]);
    setNewCampaignName("");
    setNewCampaignStatus("Active");
  };

  return (
    <div className="marketing-container">
      <h2>📢 Marketing Campaigns</h2>

      <div className="add-campaign">
        <input
          type="text"
          placeholder="Campaign Name"
          value={newCampaignName}
          onChange={(e) => setNewCampaignName(e.target.value)}
        />
        <select
          value={newCampaignStatus}
          onChange={(e) => setNewCampaignStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
        <button onClick={addCampaign}>Add Campaign</button>
      </div>

      <table className="campaigns-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td
                className={
                  c.status === "Active" ? "status-active" : "status-paused"
                }
              >
                {c.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Marketing;





