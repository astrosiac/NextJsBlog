import Image from "next/image";

// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <picture>
        <img src={"/hacker.png"} className="card-img-center" alt="" />
      </picture>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
