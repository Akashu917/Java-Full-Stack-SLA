import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header title="React Props Demo" />

      <main className="p-5 min-h-[70vh]">
        {children}
      </main>

      <Footer text="© 2026 React Learning" />
    </div>
  );
}

const styles = {
  main: {
    padding: "20px",
    minHeight: "70vh",
  },
};

export default Layout;
