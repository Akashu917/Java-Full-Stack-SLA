function UserCard({ name, age }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-64 mb-4 shadow-md">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    width: "250px",
    marginBottom: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default UserCard;