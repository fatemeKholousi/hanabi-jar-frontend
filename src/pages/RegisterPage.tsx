import axios from "axios";
import React, { useState, useRef } from "react";
import { Navigate } from "react-router";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectNow, setRedirectNow] = useState(false);

  const errorRef = useRef<any>();

  const user = { userName, password, name };
  const URL = process.env.REACT_APP_URL;

  const registerService = (user: any) => {
    axios
      .post(`${URL}/api/users`, {
        email: user.userName,
        password: user.password,
        name: user.name,
      })
      .then(({ data }) => {
        window.localStorage.setItem("token", data?.token);
        setSuccess(true);
        setTimeout(() => setRedirectNow(true), 3000);
      });
  };

  const handleSubmit: any = (event: any) => {
    event.preventDefault();
    setPassword("");
    setUserName("");
    setName("");
    registerService(user);
  };

  return (
    <section>
      {success ? (
        <>
          <h1>ثبت نام شدید </h1>

          {redirectNow && <Navigate to="/user-panel" />}
        </>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <h1>ثبت نام</h1>

          <label htmlFor="">name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="">email</label>
          <input
            type="email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
          />

          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={false}>
            ثبت نام
          </button>
          <p> اکانت ندارید؟</p>
          {/* <a href="">یکی بسازید</a> */}
        </form>
      )}
    </section>
  );
};

export default Login;
