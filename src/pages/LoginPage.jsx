import axios from "axios";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../context/auth/authContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dto, setDto] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectNow, setRedirectNow] = useState(false);

  const userRef = useRef("");
  const errorRef = useRef();
  const authContext = useContext(AuthContext);
  const { setCurrentName } = authContext;

  const user = { userName, password };
  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [password, userName]);

  const loginService = (user) => {
    axios
      .post(`${URL}/api/login`, {
        email: user.userName,
        password: user.password,
      })
      .then(({ data }) => {
        window.localStorage.setItem("token", data.token);
        setCurrentName(data.name);

        setSuccess(true);
        setTimeout(() => setRedirectNow(true), 3000);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPassword("");
    setUserName("");

    loginService(user);
  };

  return (
    <section>
      {success ? (
        <>
          <h1>وارد شدید</h1>

          {redirectNow && <Navigate to="/admin-panel" />}
        </>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <p ref={errorRef} aria-live="assertive">
            {errorMessage}
          </p>
          <h1>ورود</h1>
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
            ورود
          </button>
          <p> اکانت ندارید؟</p>
          {/* <a href="">یکی بسازید</a> */}
        </form>
      )}
    </section>
  );
};

export default Login;
