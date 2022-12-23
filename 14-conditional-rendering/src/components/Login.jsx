import React from "react";
import Input from "./Input";
function Login() {
  return (
    <form className="form">
      <h1>Enter Your Credentials</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {/* <Input type="checkbox"/>
    <Input type="Radio"/> */}

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
