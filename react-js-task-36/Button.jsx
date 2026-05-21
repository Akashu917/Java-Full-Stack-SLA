function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white rounded-lg cursor-pointer px-4 py-2 mt-3">
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Button;