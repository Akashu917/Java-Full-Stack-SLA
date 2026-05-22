import { useState, useEffect, useCallback } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function useUsers(filter) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Memoized Fetch Function
  const fetchUsers = useCallback(async (signal) => {
    try {
      setLoading(true);

      const response = await fetch(API_URL, { signal });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch Aborted");
      } else {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on Mount + Filter Change
  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    console.log("Effect Triggered");

    // Cleanup Function
    return () => {
      console.log("Cleanup Executed");
      controller.abort();
    };
  }, [fetchUsers, filter]);

  // Refresh Button Handler
  const refreshUsers = useCallback(() => {
    const controller = new AbortController();
    fetchUsers(controller.signal);
  }, [fetchUsers]);

  return {
    users,
    loading,
    refreshUsers,
  };
}

export default useUsers;