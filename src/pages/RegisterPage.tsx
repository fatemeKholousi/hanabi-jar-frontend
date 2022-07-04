import React, { useState } from "react";
import { registerService } from "../httpRequests/authService";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const [state, setState] = useState({
  //   data: {
  //     username: "",
  //     password: "",
  //     name: "",
  //   },
  //   errors: {},
  // });
  const user = {
    name,
    userName,
    password,
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    registerService(user);
  };

  return (
    <div>
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

        <label htmlFor="">name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>ثبت نام</button>
      </form>
    </div>
  );
};

export default Register;
