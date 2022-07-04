import React, { useState } from "react";
import { loginService } from "../httpRequests/authService";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const user = { userName, password };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginService(user);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">email</label>
      <input
        type="email"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <label htmlFor="">password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>ورود</button>
    </form>
  );
};

export default Login;
