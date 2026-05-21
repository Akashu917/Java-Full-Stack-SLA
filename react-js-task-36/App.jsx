import Layout from "./Layout";
import UserCard from "./UserCard";
import Button from "./Button";

function App() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <Layout>
      <h2>Welcome to React Components</h2>

      <UserCard name="Arun" age={22} />
      <UserCard name="Priya" age={25} />

      <Button
        label="Click Me"
        onClick={handleClick}
      />
    </Layout>
  );
}

export default App;
