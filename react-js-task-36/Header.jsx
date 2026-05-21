function Header({ title }) {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1>{title}</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#111827",
    color: "white",
    padding: "15px",
    textAlign: "center",
  },
};

export default Header;