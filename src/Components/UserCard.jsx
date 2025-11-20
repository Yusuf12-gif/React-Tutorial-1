import { useState } from "react";

export default function UserCard({ user }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      <p>Location: {user.location}</p>
      <p>Status: {user.online ? "🟢 Online" : "🔴 Offline"}</p>

      <button
        className="likeBtn"
        onClick={() => setLiked(!liked)}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}
