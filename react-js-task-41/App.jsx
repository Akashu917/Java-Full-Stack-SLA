import React, { useState, useMemo } from "react";
import useUsers from "./hooks/useUsers";
import UserList from "./UserList";
import FilterBox from "./FilterBox";
import Stats from "./Stats";

function App() {
  const [filter, setFilter] = useState("");

  // Custom Hook
  const { users, loading, refreshUsers } = useUsers(filter);

  // Memoized Filtered Users
  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  // Expensive Derived Value
  const averageNameLength = useMemo(() => {
    console.log("Calculating average name length...");

    if (filteredUsers.length === 0) return 0;

    const total = filteredUsers.reduce(
      (sum, user) => sum + user.name.length,
      0
    );

    return (total / filteredUsers.length).toFixed(2);
  }, [filteredUsers]);

  return (
    <div style={styles.container}>
      <h1>React Hooks Task</h1>

      <FilterBox filter={filter} setFilter={setFilter} />

      <button onClick={refreshUsers} style={styles.button}>
        Refresh Users
      </button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <Stats averageNameLength={averageNameLength} />
          <UserList users={filteredUsers} />
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  button: {
    padding: "10px 15px",
    marginBottom: "20px",
    cursor: "pointer",
  },
};

export default App;
