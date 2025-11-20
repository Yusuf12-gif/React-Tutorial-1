import UserCard from "./UserCard";

export default function UserGrid({ users }) {
  return (
    <div className="gridContainer">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}




