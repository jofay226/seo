import "./App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>home</title>
        <meta name="description" content="home page is home" />
        <link rel="canonical" href="./" />
        <meta
          name="google-site-verification"
          content="n1jZsIZXvJt8nN-PBIiCJakzrWq7cflAgDhPF-a3uvg"
        />
      </Helmet>
      <h1>App component</h1>
      <Link to={"/login"}>go to login page</Link>
      <div></div>
      <Link to={"/shop"}>go to shop page</Link>
    </>
  );
}

export default App;
