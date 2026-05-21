function Footer({ text }) {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-5">
      <p>{text}</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "white",
    padding: "10px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Footer;