import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>App component</h1>
      <Link to={"/login"}>go to login page</Link>
      <div></div>
      <Link to={"/shop"}>go to shop page</Link>
    </>
  );
}

export default App;
