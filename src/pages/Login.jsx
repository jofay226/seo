import { Helmet } from "react-helmet-async";

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login to view your account" />
        <link rel="canonical" href="./login" />
      </Helmet>
      <p>login</p>

      <h1>this is login page yeah yeah</h1>
    </div>
  );
};

export default Login;
