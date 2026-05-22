import React from "react";
import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" },
  ];

  return (
    <div>
      <h1>Users Page</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;