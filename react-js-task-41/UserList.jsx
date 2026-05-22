import React from "react";

function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="mb-4 p-2 border border-gray-300 rounded">
          <h3 className="text-lg font-bold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  listItem: {
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    listStyle: "none",
  },
};

export default UserList;